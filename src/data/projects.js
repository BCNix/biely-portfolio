//To Do:
// - Make a dedicated page for each project.
// - Inside that page make a carousel of images.
// - Add features and challenges

// Vite's built-in way to import a whole folder dynamically
const images = import.meta.glob("../assets/images/projects/**/*.webp", {
  eager: true,
  import: "default",
});

export const projects = [
  {
    id: 1,
    title: "Movie Watchlist",
    shortDescription:
      "A movie discovery app for building and saving a personal watchlist — powered by the OMDb API and persisted with Local Storage.",
    longDescription:
      "Movie Watchlist is a front-end web app that lets users search for movies through the OMDb API and save their favorites to a personal watchlist. Built with vanilla HTML, CSS, and JavaScript, it uses the Web Storage API to persist saved movies locally in the browser — so the watchlist stays intact across page reloads and sessions without needing a backend or database. The project focuses on core JavaScript fundamentals: fetching and rendering dynamic API data, DOM manipulation, and managing persistent client-side state.",
    tech: ["HTML", "CSS", "JavaScript", "OMDb API", "Local Storage"],
    liveUrl: "https://movie-watchlist-bl.netlify.app",
    repoUrl: "https://github.com/BCNix/movie-watchlist",
    coverImgSrc:
      images["../assets/images/projects/cover/movie-watchlist-cover.webp"],
    thumbnailImgSrc:
      images[
        "../assets/images/projects/thumbnail/movie-watchlist-thumbnail.webp"
      ],
    gallery: [
      // images["../assets/images/projects/gallery/movie-watchlist-search.webp"],
      // images["../assets/images/projects/gallery/movie-watchlist-saved.webp"],
    ],
    features: [
      "Search movies in real time via the OMDb API",
      "Save movies to a persistent watchlist using Local Storage",
      "Remove movies from the watchlist with one click",
    ],
    challenges:
      "One challenge was handling API rate limits and empty search results gracefully, which led me to add debounced input and clear empty-state messaging.",
  },
  {
    id: 2,
    title: "Ghibligram",
    shortDescription:
      'A Studio Ghibli-themed social feed where users post "whispers," like posts, and reply to others — with Firebase handling all user data in real time.',
    longDescription:
      'Ghibligram is a Studio Ghibli-inspired social network built with HTML, CSS, and JavaScript. Users can post a "whisper" under the Seiji account, like other users\' posts, view comments on any post, and reply directly to other users. Users can also delete their own replies. All user-generated data — posts, likes, and replies — is stored and synced in real time using Firebase, giving the app a live, database-backed social experience without a custom backend.',
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    liveUrl: "https://ghibligram.netlify.app/",
    repoUrl: "https://github.com/BCNix/ghibligram",

    coverImgSrc: images["../assets/images/projects/cover/ghibli-cover.webp"],
    thumbnailImgSrc:
      images["../assets/images/projects/thumbnail/ghibli-thumbnail.webp"],
    gallery: [],
    features: [
      'Post a "whisper" under the Seiji account',
      "Like other users' posts",
      "View comments on any post",
      "Reply directly to other users' posts",
      "Delete your own replies",
      "Real-time data storage and sync powered by Firebase (posts, likes, replies)",
    ],
    challenges:
      "One of the main challenges was structuring Firebase's data model to handle nested relationships between posts, replies, and likes while keeping reads/writes efficient and avoiding unnecessary re-renders when the UI updated in real time.",
  },
  {
    id: 3,
    title: "Birthday Bash",
    shortDescription:
      "A pickleball-themed birthday invitation site with a live countdown timer and RSVP button, built with React.",
    longDescription:
      "Birthday Bash is a digital birthday invitation built with React, created as a pickleball-themed celebration site for two friends. It features a live countdown timer to the event date and an RSVP section where guests can confirm their attendance. The project was a hands-on exercise in CSS keyframe animations, component-based architecture, and managing shared state across components using React Context.",
    tech: ["React", "CSS", "JavaScript"],
    liveUrl: "https://courtside-birthday-bash.netlify.app/",
    repoUrl: "https://github.com/BCNix/birthday-bash",
    coverImgSrc:
      images["../assets/images/projects/cover/birthday-bash-cover.webp"],
    thumbnailImgSrc:
      images[
        "../assets/images/projects/thumbnail/birthday-bash-thumbnail.webp"
      ],
    gallery: [],
    features: [
      "Live countdown timer to the event date",
      "RSVP button for guests to confirm attendance",
      "Componentized structure with reusable animated elements",
      "Shared state managed via React Context",
    ],
    challenges:
      "One challenge was coordinating animation timing across multiple components without prop drilling, which led to using createContext/useContext to share countdown state cleanly across the app.",
  },

  {
    id: 4,
    title: "Password Generator",
    shortDescription:
      "A customizable password generator with adjustable character length options, built with vanilla JavaScript.",
    longDescription:
      "Password Generator is a front-end tool built with vanilla HTML, CSS, and JavaScript as a solo project focused on core JavaScript fundamentals. Users can set the desired password length using a range slider or a linked number input, and toggle switches to include numbers and symbols in the generated password. A refresh button creates a new random password on demand, and a copy button instantly copies the result to the clipboard. The project emphasizes DOM manipulation, event handling, and working with the Clipboard API.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://password-generator-bl.netlify.app/",
    repoUrl: "https://github.com/BCNix/password-generator",
    coverImgSrc:
      images["../assets/images/projects/cover/password-generator-cover.webp"],
    thumbnailImgSrc:
      images[
        "../assets/images/projects/thumbnail/password-generator-thumbnail.webp"
      ],
    gallery: [],
    features: [
      "Range slider and number input (synced) to set password length",
      "Toggle switches to include numbers and symbols",
      "Generate button to create a new random password",
      "One-click copy-to-clipboard button",
    ],
    challenges:
      "One challenge was keeping the range slider and number input in sync so either control could update the password length without conflicting with the other, while also ensuring the generated password always respected the selected character rules.",
  },
  {
    id: 5,
    title: "Color Scheme Generator",
    shortDescription:
      "A color palette generator that creates a 5-color scheme from a chosen style, pulling data from a REST API.",
    longDescription:
      "Color Scheme Generator is a front-end tool built with vanilla HTML, CSS, and JavaScript that connects to The Color API to generate color palettes. Users choose from up to 8 color scheme styles, and the app returns 5 coordinating color blocks, each displaying its hex code. The project focuses on working with external API data, dynamic DOM rendering, and translating API responses into a clean, usable visual layout.",
    tech: ["HTML", "CSS", "JavaScript", "The Color API"],
    liveUrl: "https://color-scheme-generator-bl.netlify.app/",
    repoUrl: "https://github.com/BCNix/color-scheme-generator",
    coverImgSrc:
      images[
        "../assets/images/projects/cover/color-scheme-generator-cover.webp"
      ],
    thumbnailImgSrc:
      images[
        "../assets/images/projects/thumbnail/color-scheme-generator-thumbnail.webp"
      ],
    gallery: [],
    features: [
      "8 selectable color scheme styles",
      "Generates a palette of 5 coordinating colors per scheme",
      "Displays the hex code for each generated color",
      "Pulls live data from a REST API",
    ],
    challenges:
      "One challenge was handling the API response consistently across all 8 scheme types, since each style could return colors in a slightly different structure, requiring a normalized way to render the blocks and hex codes regardless of which scheme was selected.",
  },
];
