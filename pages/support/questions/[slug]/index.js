import React from 'react';
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Head from "next/head";
import { useRouter } from "next/router";
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { ThumbsUp, ThumbsDown, ChevronRight } from 'lucide-react';
import SupportLayout from "@/components/ui/SupportLayout";
import { useState, useEffect } from 'react';

// Custom Toast component
const Toast = ({ message, type }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className={`px-4 py-3 rounded-lg shadow-lg ${
        type === 'error' 
          ? 'bg-red-500/10 border border-red-500/20 text-red-400'
          : 'bg-gray-800 border border-gray-700 text-gray-200'
      }`}>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

// Contentful client setup
const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Render options for Contentful rich text
const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const textContent = node.content.map(item => item.value).join('');
      
      // Code block handling
      if (textContent.includes('[[code]]') && textContent.includes('[[*code]]')) {
        const codeText = textContent
          .replace('[[code]]', '')
          .replace('[[*code]]', '')
          .trim();
        return (
          <div className="relative group">
            <pre className="bg-gray-900 p-4 rounded-md my-4 overflow-x-auto border border-gray-700">
              <code className="text-sm font-mono text-blue-400">{codeText}</code>
              <button
                onClick={(e) => {
                  navigator.clipboard.writeText(codeText);
                  const tooltip = e.currentTarget.querySelector('.copy-tooltip');
                  tooltip.classList.remove('opacity-0');
                  tooltip.classList.add('opacity-100');
                  setTimeout(() => {
                    tooltip.classList.remove('opacity-100');
                    tooltip.classList.add('opacity-0');
                  }, 2000);
                }}
                className="absolute top-3 right-3 p-2 rounded-md hover:bg-gray-700 text-gray-400 hover:text-gray-200 transition-all duration-200"
                aria-label="Copy code"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span
                  className="copy-tooltip opacity-0 absolute -top-8 right-0 bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs whitespace-nowrap transform transition-all duration-300 ease-in-out"
                >
                  Copied!
                </span>
              </button>
            </pre>
          </div>
        );
      }

      // Math content handling
      if (textContent.includes('$$')) {
        return (
          <div className="my-4 text-gray-200">
            <MathJax>{textContent}</MathJax>
          </div>
        );
      }

      return <p className="text-gray-300 my-4 leading-relaxed">{children}</p>;
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a 
        href={node.data.uri} 
        className="text-blue-400 hover:text-blue-300 underline"
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};


export async function getServerSideProps({ params }) {
  const res = await client.getEntries({
    content_type: "questions",
    "fields.slug": params.slug,
  });
  const res1 = await client.getEntries({
    content_type: "questions",
  });

  if (!res.items.length) {
    return {
      notFound: true,
    };
  }
  if (!res1.items.length) {
    return {
      notFound: true,
    };
  }


  let blogs = res1.items;
  blogs = blogs.map((blog) => ({
    categories: blog.fields.categories,
  }));

  const allCategories = blogs
    .filter((blog) => blog.categories && Array.isArray(blog.categories))
    .flatMap((blog) => blog.categories);

  const uniqueCategories = Array.from(new Set(allCategories));


  const question = res.items[0].fields;
  const entryId = res.items[0].sys.id;

  return {
    props: {
      question: {
        title: question.title,
        slug: question.slug,
        content: question.blogContent,
        categories: question.categories || [],
        date: question.date,
        modifiedOn: question.modifiedOn,
        author: question.author,
        description: question.description,
        upvote: question.upvote || 0,
        downvote: question.downvote || 0,
        id: entryId
      },
      uniqueCategories 
    },
  };
}


export default function QuestionPage({ question , uniqueCategories}) {
  const router = useRouter();
  const [voted, setVoted] = useState(null);
  const [isVoting, setIsVoting] = useState(false);
  const [voteCount, setVoteCount] = useState({
    upvote: question.upvote || 0,
    downvote: question.downvote || 0
  });
  const [toast, setToast] = useState(null);

  const allCategories= ["all",...uniqueCategories];
  //console.log({allCategories});
  

  const {
    title,
    content,
    categories,
    date,
    modifiedOn,
    author,
    description,
    slug,
    id
  } = question;

  useEffect(() => {
    const savedVote = localStorage.getItem(`vote_${id}`);
    if (savedVote) {
      setVoted(savedVote);
    }
  }, [id]);

  const showToast = (message, type = 'default') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleVote = async (voteType) => {
    if (isVoting) return;

    const previousVote = voted;
    const previousCounts = { ...voteCount };

    // Optimistic update
    if (voted === voteType) {
      // Remove vote
      setVoted(null);
      setVoteCount(prev => ({
        ...prev,
        [voteType]: Math.max(0, prev[voteType] - 1)
      }));
      showToast('Vote removed');
    } else {
      // Add/change vote
      if (voted) {
        setVoteCount(prev => ({
          ...prev,
          [voted]: Math.max(0, prev[voted] - 1),
          [voteType]: prev[voteType] + 1
        }));
      } else {
        setVoteCount(prev => ({
          ...prev,
          [voteType]: prev[voteType] + 1
        }));
      }
      setVoted(voteType);
      showToast(voteType === 'upvote' ? 'Thanks for the upvote!' : 'Thanks for the feedback!');
    }

    // Update in background
    setIsVoting(true);
    try {
      const response = await fetch('/api/updateVote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          entryId: id,
          voteType: voted === voteType ? null : voteType,
          previousVote: voted,
          isRemoval: voted === voteType
        }),
      });

      if (!response.ok) {
        throw new Error('Vote update failed');
      }

      localStorage.setItem(`vote_${id}`, voted === voteType ? '' : voteType);
    } catch (error) {
      // Revert on error
      setVoted(previousVote);
      setVoteCount(previousCounts);
      showToast('Failed to update vote. Please try again.', 'error');
    } finally {
      setIsVoting(false);
    }
  };

  const getVoteButtonClass = (type) => {
    const baseClass = "flex items-center gap-1 px-3 py-2 rounded-md transition-all duration-200";
    const isThisVoteType = voted === type;
    
    if (isThisVoteType) {
      return `${baseClass} ${type === 'upvote' ? 'bg-green-400/10 text-green-400' : 'bg-red-400/10 text-red-400'}`;
    }
    
    return `${baseClass} text-gray-400 hover:bg-gray-800`;
  };

  return (
    <SupportLayout categories={allCategories}>
      <Head>
        <title>{`${title} | Questions | Support`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://xbattery.energy/support/questions/${slug}`}
        />
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={modifiedOn} />
        <link
          rel="canonical"
          href={`https://xbattery.energy/support/questions/${slug}`}
        />
      </Head>

      <MathJaxContext>
        <div className="w-[100%] max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-1 mb-8 text-sm text-gray-400 min-w-0">
            <div className="flex items-center min-w-0 flex-shrink-0">
              <button
                onClick={() => router.push("/support")}
                className="hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                Support
              </button>
              <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
            </div>

            <div className="flex items-center min-w-0 flex-shrink-0">
              <button
                onClick={() => router.push("/support/questions")}
                className="hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                Questions
              </button>
              <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
            </div>

            <span className="text-blue-400 truncate min-w-0 flex-1">
              {title}
            </span>
          </nav>

          {/* Main content */}
          <article className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-6 md:p-8">
            <header className="mb-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {title}
                  </h1>

                  <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                    <time dateTime={date} className="flex items-center">
                      Created {new Date(date).toLocaleDateString()}
                    </time>
                    <span className="hidden md:inline">•</span>
                    <time dateTime={date}>
                      Updated {new Date(modifiedOn).toLocaleDateString()}
                    </time>
                  </div>
                </div>

                {/* Voting section */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleVote("upvote")}
                    className={getVoteButtonClass("upvote")}
                    aria-label="Upvote"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {voteCount.upvote}
                    </span>
                  </button>

                  <button
                    onClick={() => handleVote("downvote")}
                    className={getVoteButtonClass("downvote")}
                    aria-label="Downvote"
                  >
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {voteCount.downvote}
                    </span>
                  </button>
                </div>
              </div>
            </header>

            {/* Categories */}
            {categories?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm border border-blue-400/20"
                  >
                    #{category}
                  </span>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="prose prose-invert max-w-none prose-pre:bg-gray-800 prose-pre:text-gray-200">
              {documentToReactComponents(content, renderOptions)}
            </div>

            {/* Author */}
            {author && (
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-sm text-gray-400">
                  Answered by{" "}
                  <span className="text-blue-400 font-medium">{author}</span>
                </p>
              </div>
            )}
          </article>
        </div>

        {/* Toast notification */}
        {toast && <Toast message={toast.message} type={toast.type} />}
      </MathJaxContext>
    </SupportLayout>
  );
}




