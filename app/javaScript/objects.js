const artistData = [
  {
    artist_name: "Bruno Mars",
    artist_id: "01",
    artist_image: "images/artists/brunoAbout.webp",
  },
  {
    artist_name: "Dua Lipa",
    artist_id: "02",
    artist_image: "images/artists/duaAbout.jpg",
  },
  {
    artist_name: "Nicki Minaj",
    artist_id: "03",
    artist_image: "images/artists/nickiAbout.jpg",
  },
  {
    artist_name: "Billie Eilish",
    artist_id: "04",
    artist_image: "images/artists/billieAbout.jpg",
  },
  {
    artist_name: "Selena Gomez",
    artist_id: "05",
    artist_image: "images/artists/selenaAbout.jpeg",
  },
  {
    artist_name: "Sam Smith",
    artist_id: "06",
    artist_image: "images/artists/smithAbout.jpg",
  },
]
const audioData = [
  {
    song_name: "24K Magic R3hab (remix)",
    artist_name: "Bruno Mars",
    song_id: 0,
    artist_id: "01",
    song_image: "images/artists/br1.jpg",
    about_image: "images/artists/brunoAbout.webp",
    audio_src: "music/random/Bruno_Mars_-_24K_Magic_R3hab_Remix_.mp3"
  },
  {
    song_name: "Anything For Love",
    artist_name: "Dua Lipa",
    song_id: 1,
    artist_id: "02",
    song_image: "images/artists/du1.jpeg",
    about_image: "images/artists/duaAbout.jpg",
    audio_src: "music/random/Dua_Lipa_-_Anything_For_Love.mp3"
  },
  {
    song_name: "Big Foot",
    artist_name: "Nicki Minaj",
    song_id: 2,
    artist_id: "03",
    song_image: "images/artists/ni1.jpg",
    about_image: "images/artists/nickiAbout.jpg",
    audio_src: "music/random/Nicki_Minaj_-_Big_Foot.mp3"
  },
  {
    song_name: "Birds Of A Feather",
    artist_name: "Billie Eilish",
    song_id: 3,
    artist_id: "04",
    song_image: "images/artists/bi1.jpg",
    about_image: "images/artists/billieAbout.jpg",
    audio_src: "music/random/Billie_Eilish-Birds_Of_A_Feather.mp3"
  },
  {
    song_name: "Birthday",
    artist_name: "Selena Gomez",
    song_id: 4,
    artist_id: "05",
    song_image: "images/artists/se1.jpg",
    about_image: "images/artists/selenaAbout.jpeg",
    audio_src: "music/random/Selena_Gomez_-_Birthday.mp3"
  },
  {
    song_name: "Blue",
    artist_name: "Billie Eilish",
    song_id: 5,
    artist_id: "06",
    song_image: "images/artists/bi2.jpg",
    about_image: "images/artists/billieAbout.jpg",
    audio_src: "music/random/Billie-Eilish-BLUE.mp3"
  },
  {
    song_name: "Body Heat",
    artist_name: "Selena Gomez",
    song_id: 6,
    artist_id: "07",
    song_image: "images/artists/se2.png",
    about_image: "images/artists/selenaAbout.jpeg",
    audio_src: "music/random/Selena_Gomez_-_Body_Heat.mp3"
  },
  {
    song_name: "Bored",
    artist_name: "Billie Eilish",
    song_id: 7,
    artist_id: "08",
    song_image: "images/artists/bi3.jpg",
    about_image: "images/artists/billieAbout.jpg",
    audio_src: "music/random/Billie_Eilish-Bored.mp3"
  },
  {
    song_name: "Camouflage",
    artist_name: "Selena Gomez",
    song_id: 8,
    artist_id: "09",
    song_image: "images/artists/se3.jpg",
    about_image: "images/artists/selenaAbout.jpeg",
    audio_src: "music/random/Selena_Gomez_-_Camouflage.mp3"
  },
  {
    song_name: "Chihiro",
    artist_name: "Billie Eilish",
    song_id: 9,
    artist_id: "10",
    song_image: "images/artists/bi4.jpg",
    about_image: "images/artists/billieAbout.jpg",
    audio_src: "music/random/Billie_Eilish_-_Chihiro.mp3"
  },
  {
    song_name: "Falling Forever",
    artist_name: "Dua Lipa",
    song_id: 10,
    artist_id: "11",
    song_image: "images/artists/du2.jpg",
    about_image: "images/artists/duaAbout.jpg",
    audio_src: "music/random/Dua_Lipa_-_Falling_Forever.mp3"
  },
  {
    song_name: "Freedom",
    artist_name: "Nicki Minaj",
    song_id: 11,
    artist_id: "12",
    song_image: "images/artists/ni2.jpg",
    about_image: "images/artists/nickiAbout.jpg",
    audio_src: "music/random/Nicki_Minaj_-_Freedom.mp3"
  },
  {
    song_name: "French Exit",
    artist_name: "Dua Lipa",
    song_id: 12,
    artist_id: "13",
    song_image: "images/artists/du3.jpg",
    about_image: "images/artists/duaAbout.jpg",
    audio_src: "music/random/Dua_Lipa_-_French_Exit.mp3"
  },
  {
    song_name: "Grenade",
    artist_name: "Bruno Mars",
    song_id: 13,
    artist_id: "14",
    song_image: "images/artists/br2.jpg",
    about_image: "images/artists/brunoAbout.webp",
    audio_src: "music/random/Bruno_Mars_-_Grenade.mp3"
  },
  {
    song_name: "Hands To Myself",
    artist_name: "selena Gomez",
    song_id: 14,
    artist_id: "15",
    song_image: "images/artists/se4.jpeg",
    about_image: "images/artists/selenaAbout.jpeg",
    audio_src: "music/random/Selena_Gomez_-_Hands_To_Myself.mp3"
  },
  {
    song_name: "Happy For You",
    artist_name: "Dua Lipa",
    song_id: 15,
    artist_id: "16",
    song_image: "images/artists/du4.jpg",
    about_image: "images/artists/duaAbout.jpg",
    audio_src: "music/random/Dua_Lipa_-_Happy_For_You.mp3"
  },
  {
    song_name: "Houdini",
    artist_name: "Dua Lipa",
    song_id: 16,
    artist_id: "17",
    song_image: "images/artists/du5.jpg",
    about_image: "images/artists/duaAbout.jpg",
    audio_src: "music/random/Dua_Lipa_-_Houdini.mp3"
  },
  {
    song_name: "If I Knew",
    artist_name: "Bruno Mars",
    song_id: 17,
    artist_id: "18",
    song_image: "images/artists/br3.jpg",
    about_image: "images/artists/brunoAbout.webp",
    audio_src: "music/random/Bruno_Mars_-_If_I_Knew.mp3"
  },
  {
    song_name: "Illusion",
    artist_name: "Dua Lipa",
    song_id: 18,
    artist_id: "19",
    song_image: "images/artists/du6.jpg",
    about_image: "images/artists/duaAbout.jpg",
    audio_src: "music/random/Dua_Lipa_-_Illusion.mp3"
  },
  {
    song_name: "It Will Rain",
    artist_name: "Bruno Mars",
    song_id: 19,
    artist_id: "20",
    song_image: "images/artists/br4.jpg",
    about_image: "images/artists/brunoAbout.webp",
    audio_src: "music/random/Bruno_Mars_-_It_Will_Rain.mp3"
  },
  {
    song_name: "I've Told You Now",
    artist_name: "Sam Smith",
    song_id: 20,
    artist_id: "21",
    song_image: "images/artists/sm1.jpg",
    about_image: "images/artists/smithAbout.jpg",
    audio_src: "music/random/Sam_Smith_-_Ive_Told_You_Now.mp3"
  },
  {
    song_name: "Just The Way You Are",
    artist_name: "Bruno Mars",
    song_id: 21,
    artist_id: "22",
    song_image: "images/artists/br5.jpg",
    about_image: "images/artists/brunoAbout.webp",
    audio_src: "music/random/Bruno_Mars_-_-_Just_The_Way_You_Are.mp3"
  },
  {
    song_name: "Lamour De Ma Vie",
    artist_name: "Billie Eilish",
    song_id: 22,
    artist_id: "23",
    song_image: "images/artists/bi5.jpg",
    about_image: "images/artists/billieAbout.jpg",
    audio_src: "music/random/Billie_Eilish_-_Lamour_De_Ma_Vie.mp3"
  },
  {
    song_name: "Leave Your Lover",
    artist_name: "Sam Smith",
    song_id: 23,
    artist_id: "24",
    song_image: "images/artists/sm2.jpg",
    about_image: "images/artists/smithAbout.jpg",
    audio_src: "music/random/Sam_Smith_-_Leave_Your_Lover.mp3"
  },
  {
    song_name: "Life Support",
    artist_name: "Sam Smith",
    song_id: 24,
    artist_id: "25",
    song_image: "images/artists/sm3.jpg",
    about_image: "images/artists/smithAbout.jpg",
    audio_src: "music/random/Sam_Smith_-_Life_Support.mp3"
  },
  {
    song_name: "Like I Can",
    artist_name: "Sam Smith",
    song_id: 25,
    artist_id: "26",
    song_image: "images/artists/sm4.jpg",
    about_image: "images/artists/smithAbout.jpg",
    audio_src: "music/random/Sam_Smith_-_Like_I_Can.mp3"
  },
  {
    song_name: "Love Will Remember",
    artist_name: "Selena Gomez",
    song_id: 26,
    artist_id: "27",
    song_image: "images/artists/se5.jpeg",
    about_image: "images/artists/selenaAbout.jpeg",
    audio_src: "music/random/Selena_Gomez_-_Love_Will_Remember.mp3"
  },
  {
    song_name: "Me And The Rhythm",
    artist_name: "Selena Gomez",
    song_id: 27,
    artist_id: "28",
    song_image: "images/artists/se6.jpg",
    about_image: "images/artists/selenaAbout.jpeg",
    audio_src: "music/random/Selena_Gomez_-_Me_And_The_Rhythm.mp3"
  },
  {
    song_name: "Mona Lisa",
    artist_name: "Nicki Minaj",
    song_id: 28,
    artist_id: "29",
    song_image: "images/artists/ni3.jpg",
    about_image: "images/artists/nickiAbout.jpg",
    audio_src: "music/random/Nicki_Minaj_-_Mona_Lisa.mp3"
  },
  {
    song_name: "Money Make Her Smile",
    artist_name: "Bruno Mars",
    song_id: 29,
    artist_id: "30",
    song_image: "images/artists/br6.jpg",
    about_image: "images/artists/brunoAbout.webp",
    audio_src: "music/random/Bruno_Mars_-_Money_Make_Her_Smile.mp3"
  },
  {
    song_name: "NDA",
    artist_name: "Billie Eilish",
    song_id: 30,
    artist_id: "31",
    song_image: "images/artists/bi6.jpg",
    about_image: "images/artists/billieAbout.jpg",
    audio_src: "music/random/Billie-Eilish-NDA.mp3"
  },
  {
    song_name: "Night Before Christmas",
    artist_name: "Sam Smith",
    song_id: 31,
    artist_id: "32",
    song_image: "images/artists/sm5.jpg",
    about_image: "images/artists/smithAbout.jpg",
    audio_src: "music/random/Sam_Smith_-_Night_Before_Christmas.mp3"
  },
  {
    song_name: "Not In That Way",
    artist_name: "Sam Smith",
    song_id: 32,
    artist_id: "33",
    song_image: "images/artists/sm6.jpg",
    about_image: "images/artists/smithAbout.jpg",
    audio_src: "music/random/Sam_Smith_-_Not_In_That_Way.mp3"
  },
  {
    song_name: "Put You in A Room",
    artist_name: "Nicki Minaj",
    song_id: 33,
    artist_id: "34",
    song_image: "images/artists/ni4.jpg",
    about_image: "images/artists/nickiAbout.jpg",
    audio_src: "music/random/Nicki_Minaj_-_Put_You_in_A_Room.mp3"
  },
  {
    song_name: "Roman Holiday",
    artist_name: "Nicki Minaj",
    song_id: 34,
    artist_id: "35",
    song_image: "images/artists/ni5.jpg",
    about_image: "images/artists/nickiAbout.jpg",
    audio_src: "music/random/Nicki_Minaj_-_Roman_Holiday.mp3"
  },
  {
    song_name: "Va Va Voom",
    artist_name: "Nicki Minaj",
    song_id: 35,
    artist_id: "36",
    song_image: "images/artists/ni6.jpg",
    about_image: "images/artists/nickiAbout.jpg",
    audio_src: "music/random/Nicki_Minaj_-_Va_Va_Voom.mp3"
  },
];
const hitsData = [
  {
    song_name: "Birds Of A Feather",
    artist_name: "Billie Eilish",
    song_id: 0,
    song_image: "images/artists/bi1.jpg",
    about_image: "images/artists/billieAbout.jpg",
    audio_src: "music/random/Billie_Eilish-Birds_Of_A_Feather.mp3"
  },
  {
    song_name: "Chihiro",
    artist_name: "Billie Eilish",
    song_id: 1,
    song_image: "images/artists/bi4.jpg",
    about_image: "images/artists/billieAbout.jpg",
    audio_src: "music/random/Billie_Eilish_-_Chihiro.mp3"
  },
  {
    song_name: "Houdini",
    artist_name: "Dua Lipa",
    song_id: 2,
    song_image: "images/artists/du5.jpg",
    about_image: "images/artists/duaAbout.jpg",
    audio_src: "music/random/Dua_Lipa_-_Houdini.mp3"
  },
  {
    song_name: "Camouflage",
    artist_name: "Selena Gomez",
    song_id: 3,
    song_image: "images/artists/se3.jpg",
    about_image: "images/artists/selenaAbout.jpeg",
    audio_src: "music/random/Selena_Gomez_-_Camouflage.mp3"
  },
  {
    song_name: "French Exit",
    artist_name: "Dua Lipa",
    song_id: 4,
    song_image: "images/artists/du3.jpg",
    about_image: "images/artists/duaAbout.jpg",
    audio_src: "music/random/Dua_Lipa_-_French_Exit.mp3"
  },
  {
    song_name: "Blue",
    artist_name: "Billie Eilish",
    song_id: 5,
    song_image: "images/artists/bi2.jpg",
    about_image: "images/artists/billieAbout.jpg",
    audio_src: "music/random/Billie-Eilish-BLUE.mp3"
  },
  {
    song_name: "I've Told You Now",
    artist_name: "Sam Smith",
    song_id: 6,
    song_image: "images/artists/sm1.jpg",
    about_image: "images/artists/smithAbout.jpg",
    audio_src: "music/random/Sam_Smith_-_Ive_Told_You_Now.mp3"
  },
  {
    song_name: "Bored",
    artist_name: "Billie Eilish",
    song_id: 7,
    song_image: "images/artists/bi3.jpg",
    about_image: "images/artists/billieAbout.jpg",
    audio_src: "music/random/Billie_Eilish-Bored.mp3"
  },
  {
    song_name: "Leave Your Lover",
    artist_name: "Sam Smith",
    song_id: 8,
    song_image: "images/artists/sm2.jpg",
    about_image: "images/artists/smithAbout.jpg",
    audio_src: "music/random/Sam_Smith_-_Leave_Your_Lover.mp3"
  },
  {
    song_name: "NDA",
    artist_name: "Billie Eilish",
    song_id: 9,
    song_image: "images/artists/bi6.jpg",
    about_image: "images/artists/billieAbout.jpg",
    audio_src: "music/random/Billie-Eilish-NDA.mp3"
  },
  {
    song_name: "Lamour De Ma Vie",
    artist_name: "Billie Eilish",
    song_id: 10,
    song_image: "images/artists/bi5.jpg",
    about_image: "images/artists/billieAbout.jpg",
    audio_src: "music/random/Billie_Eilish_-_Lamour_De_Ma_Vie.mp3"
  },
  {
    song_name: "Like I Can",
    artist_name: "Sam Smith",
    song_id: 11,
    song_image: "images/artists/sm4.jpg",
    about_image: "images/artists/smithAbout.jpg",
    audio_src: "music/random/Sam_Smith_-_Like_I_Can.mp3"
  },
  {
    song_name: "Love Will Remember",
    artist_name: "Selena Gomez",
    song_id: 12,
    song_image: "images/artists/se5.jpeg",
    about_image: "images/artists/selenaAbout.jpeg",
    audio_src: "music/random/Selena_Gomez_-_Love_Will_Remember.mp3"
  },
  {
    song_name: "Not In That Way",
    artist_name: "Sam Smith",
    song_id: 13,
    song_image: "images/artists/sm6.jpg",
    about_image: "images/artists/smithAbout.jpg",
    audio_src: "music/random/Sam_Smith_-_Not_In_That_Way.mp3"
  },
  {
    song_name: "Roman Holiday",
    artist_name: "Nicki Minaj",
    song_id: 14,
    song_image: "images/artists/ni5.jpg",
    about_image: "images/artists/nickiAbout.jpg",
    audio_src: "music/random/Nicki_Minaj_-_Roman_Holiday.mp3"
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

export {hitsData, audioData, artistData, latestUploadsData, mostWatchedVideoData};