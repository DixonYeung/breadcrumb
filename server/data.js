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
                            content: "I am a file called filea.txt"
                        },
                        "fileb.txt": {
                            type: "file",
                            content: "I am a file called fileb.txt"
                        },
                        "projects": {
                            type: "dir",
                            children: {
                                mysupersecretproject: {
                                    type: "dir",
                                    children: {
                                        mysupersecretfile: {
                                            type: "file",
                                            content: "I am an Alien"
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