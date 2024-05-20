const courses = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM-8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content: 'Overview of React Native, setting up your development environment.'
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content: 'Creating a simple mobile app using React Native components.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: 'Alice Johnson',
          email: 'alice@example.com',
        },
        {
          id: 102,
          name: 'Bob Smith',
          email: 'bob@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 2,
      name: 'Advanced React Native',
      instructor: 'Jane Smith',
      description: 'Deep dive into React Native for experienced developers.',
      enrollmentStatus: 'Closed',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM-9:00 PM',
      location: 'Online',
      prerequisites: ['Intermediate React Native knowledge', 'Basic JavaScript knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Advanced Components',
          content: 'Detailed exploration of advanced React Native components.'
        },
        {
          week: 2,
          topic: 'State Management',
          content: 'Using Redux and Context API for state management.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 103,
          name: 'Charlie Brown',
          email: 'charlie@example.com',
        },
        {
          id: 104,
          name: 'Diana Prince',
          email: 'diana@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 3,
      name: 'Full-Stack Web Development',
      instructor: 'Emily Clark',
      description: 'Become a full-stack web developer with hands-on projects.',
      enrollmentStatus: 'In Progress',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '12 weeks',
      schedule: 'Fridays and Saturdays, 5:00 PM-8:00 PM',
      location: 'Online',
      prerequisites: ['Basic HTML, CSS, and JavaScript knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Full-Stack Development',
          content: 'Overview of front-end and back-end technologies.'
        },
        {
          week: 2,
          topic: 'Building a Simple Website',
          content: 'Creating a website using HTML, CSS, and JavaScript.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 105,
          name: 'Ethan Hunt',
          email: 'ethan@example.com',
        },
        {
          id: 106,
          name: 'Fiona Glenanne',
          email: 'fiona@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 4,
      name: 'Data Science with Python',
      instructor: 'Frank Martin',
      description: 'Learn data science concepts and techniques using Python.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '8 weeks',
      schedule: 'Wednesdays and Fridays, 6:00 PM-8:00 PM',
      location: 'Online',
      prerequisites: ['Basic Python knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Data Science',
          content: 'Overview of data science, tools, and libraries.'
        },
        {
          week: 2,
          topic: 'Data Manipulation',
          content: 'Using pandas for data manipulation and analysis.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 107,
          name: 'George Washington',
          email: 'george@example.com',
        },
        {
          id: 108,
          name: 'Hannah Baker',
          email: 'hannah@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 5,
      name: 'Machine Learning Basics',
      instructor: 'Grace Hopper',
      description: 'Understand the fundamentals of machine learning and Artificial Intelligence.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '6 weeks',
      schedule: 'Tuesdays and Thursdays, 4:00 PM-6:00 PM',
      location: 'Online',
      prerequisites: ['Basic Python and statistics knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Machine Learning',
          content: 'Overview of machine learning concepts and applications.'
        },
        {
          week: 2,
          topic: 'Supervised Learning',
          content: 'Introduction to supervised learning techniques.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 109,
          name: 'Isaac Newton',
          email: 'isaac@example.com',
        },
        {
          id: 110,
          name: 'Jennifer Lawrence',
          email: 'jennifer@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 6,
      name: 'Cybersecurity Fundamentals',
      instructor: 'Henry Cavill',
      description: 'Learn the basics of cybersecurity and how to protect digital assets.',
      enrollmentStatus: 'Closed',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 5:00 PM-7:00 PM',
      location: 'Online',
      prerequisites: ['Basic networking knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Cybersecurity',
          content: 'Overview of cybersecurity concepts and threats.'
        },
        {
          week: 2,
          topic: 'Network Security',
          content: 'Fundamentals of securing networks.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 111,
          name: 'Kevin Mitnick',
          email: 'kevin@example.com',
        },
        {
          id: 112,
          name: 'Laura Palmer',
          email: 'laura@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 7,
      name: 'Introduction to Cloud Computing',
      instructor: 'Ian McKellen',
      description: 'Get started with cloud computing and services like AWS, Azure, and GCP.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 7:00 PM-9:00 PM',
      location: 'Online',
      prerequisites: ['Basic IT knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Cloud Computing',
          content: 'Overview of cloud computing concepts and models.'
        },
        {
          week: 2,
          topic: 'Cloud Service Providers',
          content: 'Introduction to AWS, Azure, and Google Cloud Platform.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 113,
          name: 'Michael Jordan',
          email: 'michael@example.com',
        },
        {
          id: 114,
          name: 'Nina Simone',
          email: 'nina@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 8,
      name: 'UI/UX Design Principles',
      instructor: 'Jessica Alba',
      description: 'Learn the principles of UI/UX design and create user-friendly interfaces.',
      enrollmentStatus: 'In Progress',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '6 weeks',
      schedule: 'Wednesdays and Fridays, 6:00 PM-8:00 PM',
      location: 'Online',
      prerequisites: ['Basic design knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to UI/UX Design',
          content: 'Overview of UI/UX design principles and best practices.'
        },
        {
          week: 2,
          topic: 'User Research',
          content: 'Conducting user research and creating user personas.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 115,
          name: 'Oprah Winfrey',
          email: 'oprah@example.com',
        },
        {
          id: 116,
          name: 'Peter Parker',
          email: 'peter@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 9,
      name: 'Blockchain Technology',
      instructor: 'Leonardo DiCaprio',
      description: 'Understand the basics of blockchain technology and its applications.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM-9:00 PM',
      location: 'Online',
      prerequisites: ['Basic programming knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Blockchain',
          content: 'Overview of blockchain technology and its history.'
        },
        {
          week: 2,
          topic: 'Cryptography Basics',
          content: 'Understanding the basics of cryptography used in blockchain.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 117,
          name: 'Quincy Jones',
          email: 'quincy@example.com',
        },
        {
          id: 118,
          name: 'Rachel Green',
          email: 'rachel@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 10,
      name: 'Artificial Intelligence for Beginners',
      instructor: 'Mark Zuckerberg',
      description: 'Learn the basics of artificial intelligence and its real-world applications.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM-8:00 PM',
      location: 'Online',
      prerequisites: ['Basic programming knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Artificial Intelligence',
          content: 'Overview of AI concepts and history.'
        },
        {
          week: 2,
          topic: 'Machine Learning Basics',
          content: 'Understanding the basics of machine learning algorithms.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 119,
          name: 'Steve Rogers',
          email: 'steve@example.com',
        },
        {
          id: 120,
          name: 'Tony Stark',
          email: 'tony@example.com',
        },
        // Additional enrolled students...
      ],
    }, {
      id: 11,
      name: 'Python Programming Fundamentals',
      instructor: 'Emma Watson',
      description: 'Learn the fundamentals of Python programming language.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '6 weeks',
      schedule: 'Mondays and Wednesdays, 6:00 PM-8:00 PM',
      location: 'Online',
      prerequisites: ['None'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Python',
          content: 'Overview of Python, installation, and basic syntax.'
        },
        {
          week: 2,
          topic: 'Data Types and Operators',
          content: 'Exploring data types, operators, and expressions in Python.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 121,
          name: 'Uma Thurman',
          email: 'uma@example.com',
        },
        {
          id: 122,
          name: 'Vin Diesel',
          email: 'vin@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 12,
      name: 'iOS App Development with Swift',
      instructor: 'Tom Cruise',
      description: 'Learn iOS app development using Swift programming language.',
      enrollmentStatus: 'Closed',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '10 weeks',
      schedule: 'Tuesdays and Thursdays, 7:00 PM-9:00 PM',
      location: 'Online',
      prerequisites: ['Basic programming knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to iOS Development',
          content: 'Overview of iOS development environment and tools.'
        },
        {
          week: 2,
          topic: 'Swift Basics',
          content: 'Understanding Swift syntax and basic programming concepts.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 123,
          name: 'Will Smith',
          email: 'will@example.com',
        },
        {
          id: 124,
          name: 'Xavier Mendes',
          email: 'xavier@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 13,
      name: 'Java for Beginners',
      instructor: 'Natalie Portman',
      description: 'Introduction to Java programming language for beginners.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '8 weeks',
      schedule: 'Mondays and Wednesdays, 6:00 PM-8:00 PM',
      location: 'Online',
      prerequisites: ['None'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Java',
          content: 'Overview of Java, installation, and basic syntax.'
        },
        {
          week: 2,
          topic: 'Object-Oriented Programming',
          content: 'Understanding classes, objects, and inheritance.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 125,
          name: 'Yvonne Strahovski',
          email: 'yvonne@example.com',
        },
        {
          id: 126,
          name: 'Zac Efron',
          email: 'zac@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 14,
      name: 'React.js Fundamentals',
      instructor: 'Ryan Reynolds',
      description: 'Fundamental concepts of React.js for building interactive UIs.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '6 weeks',
      schedule: 'Tuesdays and Thursdays, 7:00 PM-9:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React.js',
          content: 'Overview of React.js library and its ecosystem.'
        },
        {
          week: 2,
          topic: 'Components and Props',
          content: 'Understanding components, props, and state.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 127,
          name: 'Wesley Snipes',
          email: 'wesley@example.com',
        },
        {
          id: 128,
          name: 'Xena Warrior',
          email: 'xena@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 15,
      name: 'Database Management with SQL',
      instructor: 'Zoe Saldana',
      description: 'Learn SQL for managing and querying databases efficiently.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '8 weeks',
      schedule: 'Wednesdays and Fridays, 6:00 PM-8:00 PM',
      location: 'Online',
      prerequisites: ['Basic knowledge of databases'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Databases',
          content: 'Overview of databases, types, and relational model.'
        },
        {
          week: 2,
          topic: 'SQL Basics',
          content: 'Basic SQL commands for data manipulation and querying.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 129,
          name: 'Yoko Ono',
          email: 'yoko@example.com',
        },
        {
          id: 130,
          name: 'Zara Larsson',
          email: 'zara@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 16,
      name: 'Node.js Development',
      instructor: 'Tom Hardy',
      description: 'Learn server-side development with Node.js and Express.js.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM-9:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Node.js',
          content: 'Overview of Node.js, event-driven architecture, and asynchronous programming.'
        },
        {
          week: 2,
          topic: 'Express.js Framework',
          content: 'Building web applications with Express.js framework.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 131,
          name: 'Zac Brown',
          email: 'zacbrown@example.com',
        },
        {
          id: 132,
          name: 'Alice Cooper',
          email: 'alicecooper@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 17,
      name: 'Python Web Scraping',
      instructor: 'Gal Gadot',
      description: 'Learn web scraping using Python and BeautifulSoup library.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg',
      duration: '6 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM-8:00 PM',
      location: 'Online',
      prerequisites: ['Basic Python knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Web Scraping',
          content: 'Overview of web scraping, HTTP requests, and HTML parsing.'
        },
        {
          week: 2,
          topic: 'BeautifulSoup Library',
          content: 'Using BeautifulSoup library for web scraping.'
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 133,
          name: 'Adele Adkins',
          email: 'adele@example.com',
        },
        {
          id: 134,
          name: 'Brad Pitt',
          email: 'brad@example.com',
        },
        // Additional enrolled students...
      ],
    },
  ];

export default courses;
    