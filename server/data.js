let root = {
    type: "dir",
    children: {
        home: {
            type: "dir",
            children: {
                myname: {
                    type: "dir",
                    children: {
                        "filea.txt": {
                            type: "file",
                            content: "I am a file called filea.txt" // if testing for new data set, add this content
                        },
                        "fileb.txt": {
                            type: "file",
                            content: "I am a file called fileb.txt" // if testing for new data set, add this content
                        },
                        "projects": {
                            type: "dir",
                            children: {
                                mysupersecretproject: {
                                    type: "dir",
                                    children: {
                                        mysupersecretfile: {
                                            type: "file",
                                            content: "I am an Alien" // if testing for new data set, add this content
                                        },
                                    },
                                }
                            },
                        },
                    }
                },
            },
        }
    },
};

export default root;