<template>
   <div class="profile">
      <div class="img-name">
         <img src="../assets/hero.jpg" alt="my-photo">
         <div class="profile-name">
           <h1>queeneth cobham</h1>
           <h4>queencobham</h4>
         </div>
      </div>
      <div class="profile-title">
         <p>frontend web developer</p>
      </div>
      <div class="profile-btn">
         <button>Edit profile</button>
      </div>
      <div class="profile-follow">
        <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
        <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
        </svg>   
        <a href="#"><span class="one">1</span> follower</a>
        <span class="dot">.</span>
        <a href="#"><span class="one">1</span> following</a>
      </div>
      <div class="profile-details">
            <li class="location">
               <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path></svg>
               <span>Nigeria</span>
            </li>
            <li>
               <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link">
               <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
               </svg>
               <a href="#">queencobham@gmail.com</a>
            </li>
            <li>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" role="img" aria-labelledby="eha27hbhu2zt6gh1plvqrcu0hlxgjdv" class="octicon" height="16" width="16"><title id="eha27hbhu2zt6gh1plvqrcu0hlxgjdv">Twitter</title><path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="currentColor"></path></svg>
               <a href="#">@cobhamQueen</a>
            </li>
      </div>
      <div class="profile-border">
         <div class="profile-border-content">
           <div class="achievement">
            <a href="#">Achievements</a>
           </div>
           <img src="../assets/quickdraw-default.png" alt="quickdraw">
          <div class="feedback">
            <span>Beta</span>
            <a href="#">Send feedback</a>
          </div>
       </div>
      </div>
   </div>
</template>

<style scoped>
.img-name img{
   margin-top: -30px;
}

.img-name img{
  border-radius: 50%;
  border: 1px solid #d0d7de;
  box-shadow: 0 0 0 1px rgba(27, 31, 36, 0.15);
}

.profile-name{
   text-transform: capitalize;
}

.profile-name h1{
   font-size: 24px;
   color: #24292f;
   line-height: 1.25;
   font-weight: 600;
}

.profile-name h4{
   font-size: 20px;
   color: #57606a;
   font-weight: 300;
   line-height: 24px;
   margin-top: -20px;
}

.profile-title p{
   font-size: 1rem;
   color: #24292f;
   text-transform: capitalize;
   margin-top: -7px;
   margin-bottom: 16px;
}

.profile-btn button{
   font-size: 14px;
   color: #24292f;
   font-weight: 500;
   padding: 7px 120px;
   border-radius: 6px;
   background-color: #f6f8fa;
   border: 1px solid rgba(27, 31, 36, 0.15);
   box-shadow:0 1px 0 rgba(27,31,36,0.04), inset 0 1px 0 rgba(255,255,255,0.25);
   cursor: pointer;
   margin-bottom: 16px;
}

.profile-follow{
   display: flex;
   align-items: center;
   font-size: 14px;
   gap: 5px;
   margin-bottom: 16px;
}

.profile-follow a{
 color: #57606a;
 text-decoration: none;
}

.profile-follow .one{
   color: #24292f;
   font-weight: 600;
}
.octicon-people{
   margin-top: 2px;
   fill: #57606a;
}

.dot{
  margin-top: -3px;
}

.profile-details{
   font-size: 14px;
   color: #24292f;
}

.profile-details li {
   list-style: none;
   display: flex;
   align-items: center;
   gap: 7px;
   margin-bottom: 7px;
}

.profile-details a{
   color: #24292f;
   text-decoration: none;
}

.profile-details .octicon{
   margin-top: 2px;
   fill: #57606a;
   color:  #57606a;
}

.profile-border{
   border-top: 1px solid #d0d7de;
   width: 300px;
   margin-top: 16px;
}

.profile-border-content{
   padding: 16px 0;
}

.profile-border .achievement a{
   color: #24292f;
   font-size: 16px;
   text-decoration: none;
   font-weight: 600;
}

.profile-border img{
   margin-top: 10px;
   width: 69px;
   filter: drop-shadow(0 8px 24px rgba(140,149,159,0.2));
}

.profile-border .feedback{
   margin-top: 10px;
}

.profile-border .feedback span{
   font-size: 11.9px;
   color: #1a7f37;
   border-color: #2da44e;
   border: 1px solid #d0d7de;
   padding: 0 8px;
   font-weight: 400;
   border-radius: 2em;
}

.profile-border .feedback a{
   margin-left: 5px;
   text-decoration: none;
   color: #0969da;
   font-size: 12px;
}

@media (max-width: 1003px) and (min-width: 957px) {
.img-name img{
  width: 100%;
}
}

@media (max-width: 958px) and (min-width: 768px) {
.img-name img{
  width: 100%;
}
}

@media (max-width: 998px) and (min-width: 768px) {
.profile-btn button{
   padding: 7px 80px;
}

.profile-border{
   width: 240px;
}
}

@media only screen and (max-width: 766px) {
.img-name {
   margin-top: 1px;
}

.img-name{
   display: grid;
   grid-template-columns: 1fr 1fr;
   align-items: center;
}

.name{
  line-break: auto;
   padding: 0;
   margin: 0;
}

.img-name img{
  width: 40%;
  height: auto;
}

.profile-name h4{
   font-size: 20px;
}

.profile-title p{
   margin-top: 10px;
}

.profile-btn button{
   width: 100%;
   padding: 7px 0;
}

.profile-border{
   width: 100%;
   margin-top: 50px;
}

.profile-follow{
   position: absolute;
   margin-top: 60px;
}

.profile-details{
   margin-top: 10px;
}

.profile-details .location{
   display: none;
}
}

</style>

