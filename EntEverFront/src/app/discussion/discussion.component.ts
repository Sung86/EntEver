import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})

export class DiscussionComponent implements OnInit {
  selectedDrama = getSelectedDrama();
  allDramaSeries = getAllDramaSeries();
  allComments = getAllComments();
  myComments = getMyComments();

  constructor() { }

  ngOnInit(): void {
  }

}
let getMyComments = () => {
  let comments: any[] = [];
  for (let i = 0; i < 4; i++) {
    const comment = {
      profilePictureUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KOnfjuEPbm6s7I-QuK61EAHaLt%26pid%3DApi&f=1",
      userName: "Maurine Borghildr",
      commentAgo: "1 hour ago",
      commentMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laboriosam unde ipsum impedit eum cumque doloribus doloremque aliquam vitae quae."
    }
    comments.push(comment);
  }
  return comments;
}
let getAllComments = () => {
  let comments: any[] = [];
  for (let i = 0; i < 6; i++) {
    const comment = {
      profilePictureUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.askmen.com%2F1080x540%2F2016%2F01%2F25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg&f=1&nofb=1",
      userName: "John Smith",
      commentAgo: "10 mins ago",
      commentMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laboriosam unde ipsum impedit eum cumque doloribus doloremque aliquam vitae quae."
    }
    comments.push(comment);
  }
  return comments;
}
let getAllDramaSeries = () => {
  let dramaSeries: any[] = [];
  for (let i = 0; i < 10; i++) {
    const dramaInfo = {
      episodeNumber: `8.${i + 1}`,
      videoUrl: "https://www.youtube.com/embed/my4eXuV0MbI",
      thumbnailUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.titanbooks.com%2Fcatalog%2Fproducts%2F7651%2Fnoah.jpg&f=1&nofb=1",
      likes: Math.round(500 * 10 * Math.random()),
      title: `Episode 8.${i + 1}`,
      actors: ["Jason Statham", "Holt McCallany", "Jeffrey Thomas Donovan"],
      category: "Drama US",
      hashTags: ["Action", "Crime", "Thriller"],
      yearPublished: "2021"
    }
    dramaSeries.push(dramaInfo);
  }
  return dramaSeries;
}
let getSelectedDrama = () => {
  const dramaInfo = {
    videoUrl: "https://www.youtube.com/embed/my4eXuV0MbI",
    likes: "234,345,678",
    title: "Episode 8",
    actors: ["Jason Statham", "Holt McCallany", "Jeffrey Thomas Donovan"],
    category: "Drama US",
    hashTags: ["Action", "Crime", "Thriller"],
    yearPublished: "2021"
  };
  return dramaInfo;
}