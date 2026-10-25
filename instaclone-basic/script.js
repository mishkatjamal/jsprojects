const allReels = [
  {
    profileImage: "https://i.pravatar.cc/150?img=1",
    image: "https://picsum.photos/400/700?random=1",
    caption: "Enjoying the beautiful sunset 🌅",
    isFollowed: true,
    username: "rahul_dev",
    likeCount: 1200,
    commentCount: 85,
    shareCount: 42,
    musicImage: "https://picsum.photos/100/100?random=11",
    isLiked:false,
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=2",
    image: "https://picsum.photos/400/700?random=2",
    caption: "Life is better when you travel ✈️",
    isFollowed: false,
    username: "travel_lover",
    likeCount: 2500,
    commentCount: 120,
    shareCount: 96,
    musicImage: "https://picsum.photos/100/100?random=12",
    isLiked:true,
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=3",
    image: "https://picsum.photos/400/700?random=3",
    caption: "Just another productive day 💻",
    isFollowed: true,
    username: "code_with_aman",
    likeCount: 890,
    commentCount: 45,
    shareCount: 28,
    musicImage: "https://picsum.photos/100/100?random=13",
    isLiked:false,
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=4",
    image: "https://picsum.photos/400/700?random=4",
    caption: "Keep smiling and stay positive 😊",
    isFollowed: false,
    username: "priya_sharma",
    likeCount: 3400,
    commentCount: 210,
    shareCount: 150,
    musicImage: "https://picsum.photos/100/100?random=14",
    isLiked:true,
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=5",
    image: "https://picsum.photos/400/700?random=5",
    caption: "Gym time! No excuses 💪",
    isFollowed: true,
    username: "fitness_raj",
    likeCount: 1800,
    commentCount: 95,
    shareCount: 65,
    musicImage: "https://picsum.photos/100/100?random=15",
    isLiked:true,
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=6",
    image: "https://picsum.photos/400/700?random=6",
    caption: "Good food, good mood 🍕",
    isFollowed: false,
    username: "foodie_queen",
    likeCount: 4200,
    commentCount: 320,
    shareCount: 180,
    musicImage: "https://picsum.photos/100/100?random=16",
    isLiked:true,
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=7",
    image: "https://picsum.photos/400/700?random=7",
    caption: "Chasing dreams every day ✨",
    isFollowed: true,
    username: "arjun_motivates",
    likeCount: 1500,
    commentCount: 75,
    shareCount: 50,
    musicImage: "https://picsum.photos/100/100?random=17",
    isLiked:true,
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=8",
    image: "https://picsum.photos/400/700?random=8",
    caption: "Nature is the best therapy 🌿",
    isFollowed: false,
    username: "nature_clicks",
    likeCount: 5600,
    commentCount: 280,
    shareCount: 240,
    musicImage: "https://picsum.photos/100/100?random=18",
    isLiked:true,
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=9",
    image: "https://picsum.photos/400/700?random=9",
    caption: "Simple moments, beautiful memories ❤️",
    isFollowed: true,
    username: "neha_verma",
    likeCount: 2200,
    commentCount: 130,
    shareCount: 88,
    musicImage: "https://picsum.photos/100/100?random=19",
    isLiked:true,
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=10",
    image: "https://picsum.photos/400/700?random=10",
    caption: "Work hard, stay humble 🔥",
    isFollowed: false,
    username: "dev_karan",
    likeCount: 3100,
    commentCount: 165,
    shareCount: 110,
    musicImage: "https://picsum.photos/100/100?random=20",
    isLiked:true,
  }
];

let reels = document.querySelector(".all-reels")


function addData(){
  let sum = ""
allReels.forEach((elem,idx)=>{

    sum =sum + `<div class="reel">
          <!-- inner  -->
           <!-- reels left -->
          <div class="reel-left">
            <div class="reel-left-top">
              <img
                src='${elem.profileImage}'
                alt=""
              />
              <h5>@${elem.username}</h5>
              <button id="${idx}" class="followBtn">${elem.isFollowed ?"Follow":"Unfollow"}</button>
            </div>

            <div class="reel-left-bottom">
              <p>
                ${elem.caption}
              </p>
            </div>
          </div>
          <!-- reels left -->

          <!-- reels center -->
           <div class="reel-center">
            <img
                src="${elem.image}"
                alt=""
              />
           </div>
            <!-- reels center -->


             <!-- reels right -->
              <div class="reel-right">
                
                    <h4 id="${idx}">${elem.isLiked?`<i class="love ri-poker-hearts-fill"></i>`:`<i class="ri-poker-hearts-line"></i>`}
                    <p>${elem.likeCount}</p></h4>
                    <h4><i class="ri-chat-1-line"></i><p>${elem.commentCount}</p></h4>
                    <h4><i class="ri-share-forward-line"></i><p>${elem.shareCount}</p></h4>
                    <h4><i class="ri-chat-download-line"></i></h4>
                    <h4><i class="ri-more-2-line"></i></h4>
                    <img class="reel-right-img" src="${elem.musicImage}" alt="">
                
              </div>
          <!-- inner  -->
        </div>`
    

})

reels.innerHTML= sum
}
addData()

reels.addEventListener("click",(dets)=>{


    if (dets.target.classList.contains("followBtn")) {
    let id = dets.target.id
     if (allReels[id].isFollowed) {
    allReels[id].isFollowed = false;
  } else {
    allReels[id].isFollowed = true;
  }
  }else{
     if(!allReels[dets.target.id].isLiked){
    allReels[dets.target.id].likeCount++
    allReels[dets.target.id].isLiked = true
  }else{
    allReels[dets.target.id].likeCount--
    allReels[dets.target.id].isLiked = false
  }
  }


 

  addData()

})



