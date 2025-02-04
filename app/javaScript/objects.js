const hitsData = [
  {
    song_name: "Faded",
    artist_name: "Alan Walker",
    song_id: 0,
    artist_id: "01",
    song_image: "images/artists/alan-walker.jpg",
    song_image2: "images/artists/alan-walkerPlay.jpg",
    artist_image: "images/artists/alan.jpg",
    about_image: "images/artists/alan-about.jpg",
    song_group: "recommendations",
    song_info: "Alan Walker - Faded",
    audio_src: "music/random/Alan_Walker-Faded.mp3"
  },
  {
    song_name: "Bad Habits",
    artist_name: "Ed Sheeran",
    song_id: 1,
    artist_id: "02",
    song_image: "images/artists/sheeran.jpg",
    song_image2: "images/artists/sheeranPlay.jpg",
    artist_image: "images/artists/sheeran2.jpg",
    about_image: "images/artists/sheeran.jpg",
    song_group: "recommendations",
    song_info: "Ed Sheeran - Bad Habits",
    audio_src: "music/random/Ed_Sheeran-Bad_Habits.mp3"
  },
  {
    song_name: "NDA",
    artist_name: "Billie Eilish",
    song_id: 2,
    artist_id: "03",
    song_image: "images/artists/billie.jpg",
    song_image2: "images/artists/billiepLAY.jpg",
    artist_image: "images/artists/billie1.jpg",
    about_image: "images/artists/billieAbout.jpg",
    song_group: "recommendations",
    song_info: "Billie Eilish - NDA",
    audio_src: "music/random/Billie-Eilish-NDA.mp3"
  },
  {
    song_name: "Shivers",
    artist_name: "Ed Sheeran",
    song_id: 3,
    artist_id: "04",
    song_image: "images/artists/sheeran2.jpg",
    song_image2: "images/artists/sheeranPlay.jpg",
    artist_image: "images/artists/sheeran2.jpg",
    about_image: "images/artists/sheeran.jpg",
    song_group: "recommendations",
    song_info: "Ed Sheeran - Shivers",
    audio_src: "music/random/Ed_Sheeran-Shivers.mp3"
  },
  {
    song_name: "Halo",
    artist_name: "Beyonce",
    song_id: 4,
    artist_id: "05",
    song_image: "images/artists/beyonce.jpg",
    song_image2: "images/artists/beyoncePlay.jpg",
    artist_image: "images/artists/beyonce1.jpg",
    about_image: "images/artists/beyonceAbout.jpg",
    song_group: "recommendations",
    song_info: "Beyonce - Halo",
    audio_src: "music/random/Beyonce-Halo.mp3"
  },
  {
    song_name: "Man I Am",
    artist_name: "Sam Smith",
    song_id: 5,
    artist_id: "06",
    song_image: "images/artists/smith.jpg",
    song_image2: "images/artists/smithPlay.jpg",
    artist_image: "images/artists/smith1.jpg",
    about_image: "images/artists/smith.jpg",
    song_group: "recommendations",
    song_info: "Sam Smith - Man I Am",
    audio_src: "music/random/Sam_Smith-Man_I_Am.mp3"
  },
  {
    song_name: "Dangerously",
    artist_name: "Ed Sheeran",
    song_id: 6,
    artist_id: "07",
    song_image: "images/artists/sheeran5.jpg",
    song_image2: "images/artists/sheeran4.jpg",
    artist_image: "images/artists/sheeran.jpg",
    about_image: "images/artists/sheeran.jpg",
    song_group: "recommendations",
    song_info: "Ed Sheeran - Dangerously",
    audio_src: "music/random/Ed-Sheeran-Dangerously.mp3"
  }
];
const audioData = [
  {
    song_name: "Faded",
    artist_name: "Alan Walker",
    song_id: 0,
    artist_id: "01",
    song_image: "images/artists/alan-walker.jpg",
    song_image2: "images/artists/alan-walkerPlay.jpg",
    artist_image: "images/artists/alan.jpg",
    about_image: "images/artists/alan-about.jpg",
    song_group: "recommendations",
    song_info: "Alan Walker - Faded",
    audio_src: "music/random/Alan_Walker-Faded.mp3"
  },
  {
    song_name: "Bad Habits",
    artist_name: "Ed Sheeran",
    song_id: 1,
    artist_id: "02",
    song_image: "images/artists/sheeran.jpg",
    song_image2: "images/artists/sheeranPlay.jpg",
    artist_image: "images/artists/sheeran2.jpg",
    about_image: "images/artists/sheeran.jpg",
    song_group: "recommendations",
    song_info: "Ed Sheeran - Bad Habits",
    audio_src: "music/random/Ed_Sheeran-Bad_Habits.mp3"
  },
  {
    song_name: "NDA",
    artist_name: "Billie Eilish",
    song_id: 2,
    artist_id: "03",
    song_image: "images/artists/billie.jpg",
    song_image2: "images/artists/billiepLAY.jpg",
    artist_image: "images/artists/billie1.jpg",
    about_image: "images/artists/billieAbout.jpg",
    song_group: "recommendations",
    song_info: "Billie Eilish - NDA",
    audio_src: "music/random/Billie-Eilish-NDA.mp3"
  },
  {
    song_name: "Shivers",
    artist_name: "Ed Sheeran",
    song_id: 3,
    artist_id: "04",
    song_image: "images/artists/sheeran2.jpg",
    song_image2: "images/artists/sheeranPlay.jpg",
    artist_image: "images/artists/sheeran2.jpg",
    about_image: "images/artists/sheeran.jpg",
    song_group: "recommendations",
    song_info: "Ed Sheeran - Shivers",
    audio_src: "music/random/Ed_Sheeran-Shivers.mp3"
  },
  {
    song_name: "Halo",
    artist_name: "Beyonce",
    song_id: 4,
    artist_id: "05",
    song_image: "images/artists/beyonce.jpg",
    song_image2: "images/artists/beyoncePlay.jpg",
    artist_image: "images/artists/beyonce1.jpg",
    about_image: "images/artists/beyonceAbout.jpg",
    song_group: "recommendations",
    song_info: "Beyonce - Halo",
    audio_src: "music/random/Beyonce-Halo.mp3"
  },
  {
    song_name: "Man I Am",
    artist_name: "Sam Smith",
    song_id: 5,
    artist_id: "06",
    song_image: "images/artists/smith.jpg",
    song_image2: "images/artists/smithPlay.jpg",
    artist_image: "images/artists/smith1.jpg",
    about_image: "images/artists/smith.jpg",
    song_group: "recommendations",
    song_info: "Sam Smith - Man I Am",
    audio_src: "music/random/Sam_Smith-Man_I_Am.mp3"
  },
  {
    song_name: "Dangerously",
    artist_name: "Ed Sheeran",
    song_id: 6,
    artist_id: "07",
    song_image: "images/artists/sheeran5.jpg",
    song_image2: "images/artists/sheeran4.jpg",
    artist_image: "images/artists/sheeran.jpg",
    about_image: "images/artists/sheeran.jpg",
    song_group: "recommendations",
    song_info: "Ed Sheeran - Dangerously",
    audio_src: "music/random/Ed-Sheeran-Dangerously.mp3"
  }
];

const latestUploadsData = [
  {
    video_name: "Dungeons vs dragons",
    video_image: "images/covers/video/dungeons.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "22min",
    video_id: 1,
    video_rating: "9.5",
    video_info: "Dungeons vs dragons: final battle scene",
    video_src: "https://www.youtube.com/embed/l_Kr_oyZ1p8?si=oln2zIa0eyG0v_fP"
  },
  {
    video_name: "Blue beetle: first transformation",
    video_image: "images/covers/video/beetle.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "26min",
    video_id: 2,
    video_rating: "7.2",
    video_info: "Blue beetle: alien beetle first merge with host",
    video_src: "https://www.youtube.com/embed/g0x2kurmDlA?si=I4c6Df7r6VrTsAnz"
  },
  {
    video_name: "Supergirl vs zod",
    video_image: "images/covers/video/supergirl.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "16min",
    video_id: 3,
    video_rating: "7.7",
    video_info: "Supergirl vs zod: rage battle for earth",
    video_src: "https://www.youtube.com/embed/DTUcaDb-2r0?si=Pb_GUuyIXiUCxUld"
  },
  {
    video_name: "Urameshi yusuke vs toguro",
    video_image: "https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_s7gPE2AlyzDO9wRnykMa0a9YeS_yQFd8_SVH5e1wWGc4MiARr-pkdGIoqvGsYRmgnDu09KbM1Zs_Xnu3KU4Ab2ofxIA2E8jGPyfNV7srStg-de4uFJuc50KC8Bc5ArQb4StZ90twFH8u0u93U=w919-h516-p-k-no-nu",
    video_year: "2023",
    video_group: "HD",
    video_duration: "21min",
    video_id: 4,
    video_rating: "8.5",
    video_info: "Urameshi yusuke vs toguro awesome fight scene",
    video_src: "https://www.youtube.com/embed/M-ueftd5aJU?si=9MT2QJg6Kcndd4Ph"
  },
  {
    video_name: "Dracula untold: vlads vampires",
    video_image: "images/covers/video/dracula.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "31min",
    video_id: 5,
    video_rating: "8.5",
    video_info: "Dracula untold: vlads vampires vs the persian army",
    video_src: "https://www.youtube.com/embed/jtXEOk5DeQI?si=DAdUYN2E6jdaQpet"
  },
  {
    video_name: "Immortals: gods vs titans",
    video_image: "images/covers/video/immortals.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "17min",
    video_id: 6,
    video_rating: "7.9",
    video_info: "Immortals: epic battle, gods vs titans",
    video_src: "https://www.youtube.com/embed/kJvc-eDdEw8?si=g6e4WyIB9IyKiCyN"
  },
  {
    video_name: "Monster hunter",
    video_image: "images/covers/video/monsters.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "17min",
    video_id: 7,
    video_rating: "7.9",
    video_info: "Monster hunter: hunters vs diablos",
    video_src: "https://www.youtube.com/embed/uT5RGuglLbM?si=5SpoJ_GAX4CTr0hd"
  },
  {
    video_name: "Nezha vs Ao bing",
    video_image: "images/covers/video/nezha1.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "17min",
    video_id: 8,
    video_rating: "7.9",
    video_info: "Nezha vs Ao bing: epic battle",
    video_src: "https://www.youtube.com/embed/eGL2JdkbXT8?si=QDtHdQGomVawyLRj"
  },
  {
    video_name: "The witcher: battle scene",
    video_image: "images/covers/video/witcher.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "17min",
    video_id: 9,
    video_rating: "7.9",
    video_info: "The witcher: vesemir vs leshen",
    video_src: "https://www.youtube.com/embed/1MZC765U38Q?si=L2ukJ-cNKpSOnirJ"
  },
  {
    video_name: "Nezha vs Dragon son",
    video_image: "images/covers/video/nezha2.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "17min",
    video_id: 10,
    video_rating: "7.9",
    video_info: "Nezha vs Ao bing: nezha reborn",
    video_src: "https://www.youtube.com/embed/qFF6g4Q0H3g?si=P3K5p-nAKBVuPCTL"
  },
];
const mostWatchedVideoData = [
  {
    video_name: "Eternals vs kro the deviant",
    video_image: "images/covers/video/eternals.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "22min",
    video_id: 1,
    video_rating: "9.5",
    video_info: "Eternals vs kro the deviant",
    video_src: "https://www.youtube.com/embed/lR7nxIMgTy4?si=MYl5jG3uO4DXPBNp"
  },
  {
    video_name: "Undisputed Boyka Redemption",
    video_image: "images/covers/video/boyka.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "26min",
    video_id: 2,
    video_rating: "7.2",
    video_info: "Undisputed boyka battle scenes",
    video_src: "https://www.youtube.com/embed/U1gH6XekL_c?si=UOeDk2YTqu2ORjI1"
  },
  {
    video_name: "Moon knight scenes",
    video_image: "images/covers/video/moon.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "29min",
    video_id: 3,
    video_rating: "8.9",
    video_info: "Moon knight battle scenes compilation",
    video_src: "https://www.youtube.com/embed/p2rsb2alw_E?si=KcRLY87xuxclmxk0"
  },
  {
    video_name: "Gabimaru vs tensen",
    video_image: "images/covers/video/gabimaru.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "10min",
    video_id: 4,
    video_rating: "9.2",
    video_info: "Awesome anime battle scene",
    video_src: "https://www.youtube.com/embed/VD2CpPSWSWY?si=LvvU_yLinv6kS7P6"
  },
  {
    video_name: "Monster army vs knights",
    video_image: "images/covers/video/knights.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "16min",
    video_id: 5,
    video_rating: "7.7",
    video_info: "Monster army vs knights: battle for power",
    video_src: "https://www.youtube.com/embed/EBFGO9wbBS4?si=aRxok6bJ-GRFLdmS"
  },
  {
    video_name: "Warcraft: Durotan vs Gul' dan",
    video_image: "images/covers/video/warcraft.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "21min",
    video_id: 6,
    video_rating: "8.5",
    video_info: "Warcraft: War for control of the horde",
    video_src: "https://www.youtube.com/embed/7Ejd0CMgqIQ?si=oSsL_fA7-WlNZbAV"
  },
  {
    video_name: "Legolas vs Bolg",
    video_image: "images/covers/video/lotr.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "13min",
    video_id: 7,
    video_rating: "7.7",
    video_info: "Lord of the rings",
    video_src: "https://www.youtube.com/embed/VWG6N7G22Uc?si=9li2o-IinfsS_gbC"
  },
  {
    video_name: "The great wall: first battle",
    video_image: "images/covers/video/greatWall.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "17min",
    video_id: 8,
    video_rating: "8.6",
    video_info: "The great wall: first battle",
    video_src: "https://www.youtube.com/embed/qidtdvpzNao?si=UXeBsND0sSaf8s6y"
  },
  {
    video_name: "Stranger things: prison fight scene",
    video_image: "images/covers/video/stranger.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "31min",
    video_id: 9,
    video_rating: "8.5",
    video_info: "Stranger things: prison fight scene",
    video_src: "https://www.youtube.com/embed/StrWcKbZLYQ?si=CTlVnlgs9jlo7fJP"
  },
  {
    video_name: "Underworld: Lycans vs vampire",
    video_image: "images/covers/video/underworld.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "17min",
    video_id: 10,
    video_rating: "7.9",
    video_info: "Underworld: Lycans vs vampire",
    video_src: "https://www.youtube.com/embed/1CkC1-_8FzA?si=6VI7wU2BIGARCPTk"
    }
];

export {hitsData, audioData, latestUploadsData, mostWatchedVideoData};