const Posts = [
  {
    id: 1,
    user: {
      name: "Aum Tuhin",
      currentUser: true,
      motto: "Liberty, Equality, Fraternity",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    content: {
      type: "image",
      url: "https://images.unsplash.com/photo-1650069739049-6da516e3da20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    actions: {
      likes: "10k",
      comments: "1.5k",
    },
  },
  {
    id: 2,
    user: {
      name: "Michael Solinski",
      currentUser: false,
      motto: "If I have seen further, it is by standing on the shoulders of Giants.",
      avatar:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    content: {
      type: "image",
      url: "https://images.unsplash.com/photo-1650185514806-8fbb1894429b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80",
    },
    actions: {
      likes: "2.5k",
      comments: "1k",
    },
  },
  {
    id: 3,
    user: {
      name: "Sophia Maria",
      currentUser: false,
      motto: "I will either find a way or make one",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    content: {
      type: "image",
      url: "https://images.unsplash.com/photo-1491864568965-3663792944aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    actions: {
      likes: "100k",
      comments: "15k",
    },
  },
];


const NewPosts = [
  {
    id: 4,
    user: {
      name: "Rizwan Kabir",
      currentUser: false,
      motto: "peak softly and carry a big stick",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    content: {
      type: "image",
      url: "https://images.pexels.com/photos/8525196/pexels-photo-8525196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    actions: {
      likes: "10k",
      comments: "1.5k",
    },
  },
  {
    id: 5,
    user: {
      name: "Jannatul Ferdows",
      currentUser: false,
      motto: "If I have seen further, it is by standing on the shoulders of Giants.",
      avatar:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    content: {
      type: "image",
      url: "https://images.pexels.com/photos/10419931/pexels-photo-10419931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    actions: {
      likes: "2.5k",
      comments: "1k",
    },
  },
  {
    id: 6,
    user: {
      name: "John Doe",
      currentUser: false,
      motto: "For the benefit of all",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    content: {
      type: "image",
      url: "https://images.pexels.com/photos/10012589/pexels-photo-10012589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    actions: {
      likes: "100k",
      comments: "15k",
    },
  },
];

const Data = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/11653295/pexels-photo-11653295.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/8965699/pexels-photo-8965699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/4197491/pexels-photo-4197491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/4226726/pexels-photo-4226726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/3059052/pexels-photo-3059052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1650139504331-9bc867a86b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  }
];





export { Posts, NewPosts, Data };
