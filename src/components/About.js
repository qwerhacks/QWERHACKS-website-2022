import React from 'react';

function About() {
   return (
      <div className="About">
         <div class="team-section card purple-scheme">
            <div class="team-bio">
               <img src={require("../img/christine_headshot.jpeg")} alt="christine headshot" class="team-image" width="225px" />
               <div class="team-bio-text">
                  <h1>Christine (Minjeong) Kim <span class="names-pronouns">(they/them/theirs)</span></h1>
                  <div class="team-blurb">
                     <span class="team-header">Role: </span>
                     external director
                  </div>
                  <div class="team-blurb">
                     <span class="team-header">Major; Year: </span>
                     computer science, 2024
                  </div>
               </div>
            </div>
            <div class="team-blurb">
               <span class="team-header">What I Do: </span>
               I oversee sponsorship, coprogramming, and publicity and design to make sure everything is on schedule and working in conjunction with what we need internally.
            </div>
            <div class="team-blurb">
               <span class="team-header">Why: </span>
               QWER Hacks to me is an event with the central purpose of helping marginalized individuals in the tech community feel seen and heard because we exist. Having the chance to work on the first steps of countering erasure by holding our hackathon is something I'm fortunate and grateful to be a part of.
            </div>
            <div class="team-blurb">
               <span class="team-header">I'm Excited About... </span>
               I'm really looking forward to being able to offer QWER Hacks 2022 in a hybrid format! We'll be combining the versatility and reach of the virtual aspect with the personalization and atmosphere of an in-person event.
            </div>
         </div>

         {/* <div class="team-section card peach-scheme">
            <div class="team-bio">
               <img src={require("../img/vaughn_headshot.jpg")} alt="Vaughn headshot" class="team-image" width="225px" />
               <div class="team-bio-text">
                  <h1>Vaughn Chu <span class="names-pronouns">(he/him/his)</span></h1>
                  <div class="team-blurb">
                     <span class="team-header">Role: </span>
                     internal director
                  </div>
                  <div class="team-blurb">
                     <span class="team-header">Major; Year: </span>
                     electrical engineering, 2024
                  </div>
               </div>
            </div>
            <div class="team-blurb">
               <span class="team-header">What I Do: </span>
               I lead the internal committee of QWER Hacks, where my primary role is to provide needed resources, support, and leadership to my team. I ensure that we are working on schedule, getting all of our logistics organized, and improving QWER Hacks in any way possible!
            </div>
            <div class="team-blurb">
               <span class="team-header">Why: </span>
               I work on QWER Hacks because I care about bringing more visibility to the queer and trans community worldwide and creating a space where people like us can feel safe. Being a part of this team has given me the opportunity to be around amazing and passionate people who share these same missions and goals.
            </div>
            <div class="team-blurb">
               <span class="team-header">I'm Excited About... </span>
               I'm excited to meet all of our attendees and hear your stories. Personally, QWER Hacks has given me the space to discover my own identity, become more empowered, and grow into the person I am now, and I'm excited for this to be shared with all of you!
            </div>
         </div> */}

         <div class="team-section card yellow-scheme">
            <div class="team-bio">
               <img src={require("../img/rithika_headshot.jpeg")} alt="Rithika headshot" class="team-image" width="225px" />
               <div class="team-bio-text">
                  <h1>Rithika Srinivasan<span class="names-pronouns">(she/her/hers)</span></h1>
                  <div class="team-blurb">
                     <span class="team-header">Role: </span>
                     sponsorship
                  </div>
                  <div class="team-blurb">
                     <span class="team-header">Major; Year: </span>
                     computer science, 2022
                  </div>
               </div>
            </div>
            <div class="team-blurb">
               <span class="team-header">What I Do: </span>
               I communicate with company sponsors and assist their representatives with participating in in QWER Hacks as mentors and recruiters.
            </div>
            <div class="team-blurb">
               <span class="team-header">Why: </span>
               I have often felt intimidated by hackathons and how they focus so much on technical lessons, but QWER Hacks integrates community, identity, and technical elements all together. I work on QWER Hacks to help form an accepting culture that reminds all attendees that there is a space for them in tech.
            </div>
            <div class="team-blurb">
               <span class="team-header">I'm Excited About... </span>
               I am excited for Lil Nas X to perform at our event!! (Jk this is very much me trying to manifest it happening and likely will not be true... unless? :eyes:) BUT REGARDLESS I'M MOST EXCITED FOR THE PEOPLE AND THE VIBESSS
            </div>
         </div>

         <div class="team-section card green-scheme">
            <div class="team-bio">
               <img src={require("../img/spurthi_headshot.jpg")} alt="Spurthi headshot" class="team-image" width="225px" />
               <div class="team-bio-text">
                  <h1>Spurthi Rallapalli <span class="names-pronouns">(she/her/hers)</span></h1>
                  <div class="team-blurb">
                     <span class="team-header">Role: </span>
                     coprogramming
                  </div>
                  <div class="team-blurb">
                     <span class="team-header">Major; Year: </span>
                     computer science, 2022
                  </div>
               </div>
            </div>
            <div class="team-blurb">
               <span class="team-header">What I Do: </span>
               I work on putting together speakers and workshops, and organizing volunteers and judges! Basically lots of day-of logistics!
            </div>
            <div class="team-blurb">
               <span class="team-header">Why: </span>
               I’m super passionate about creating safe and welcome spaces for people in engineering + stem, and QWER Hacks does just that! Super excited to be on the team this year 🥰
            </div>
            <div class="team-blurb">
               <span class="team-header">I'm Excited About... </span>
               Very excited to (hopefully) have an in person aspect for my last year here and also hang out with some of my favorite people in the universe!!!
            </div>
         </div>

         <div class="team-section card blue-scheme">
            <div class="team-bio">
               <img src={require("../img/diantha_headshot.jpg")} alt="diantha headshot" class="team-image" width="225px" />
               <div class="team-bio-text">
                  <h1>Diantha Ngo <span class="names-pronouns">(she/her/hers)</span></h1>
                  <div class="team-blurb">
                     <span class="team-header">Role: </span>
                     media and publicity chair
                  </div>
                  <div class="team-blurb">
                     <span class="team-header">Major; Year: </span>
                     bioengineering, 2022
                  </div>
               </div>
            </div>
            <div class="team-blurb">
               <span class="team-header">What I Do: </span>
               I'm responsible for designing QWER Hacks' visual theme and promotional materials, as well as the swag that participants receive! I also raise hell on our social media accounts.
            </div>
            <div class="team-blurb">
               <span class="team-header">Why: </span>
               I'm very happy to be able to contribute to such a welcoming and loving community, especially in the world of tech, which could benefit from more diverse voices and perspectives that I strive to empower through my work with QWER Hacks.
            </div>
            <div class="team-blurb">
               <span class="team-header">I'm Excited About... </span>
               I'm really excited about being able to host the hackathon in-person and put on another amazing event with my even more amazing organizer team! And the balloon animal artist who's going to be there, of course.
            </div>
         </div>

         <div class="team-section card indigo-scheme">
            <div class="team-bio">
               <img src={require("../img/tanya_headshot.png")} alt="tanya headshot" class="team-image" width="225px" />
               <div class="team-bio-text">
                  <h1>Tanya Zhong <span class="names-pronouns">(she/her/hers)</span></h1>
                  <div class="team-blurb">
                     <span class="team-header">Role: </span>
                     dev
                  </div>
                  <div class="team-blurb">
                     <span class="team-header">Major; Year: </span>
                     computer science, 2022
                  </div>
               </div>
            </div>
            <div class="team-blurb">
               <span class="team-header">What I Do: </span>
               I maintain this website and the Qwer Hacks Discord bot!
            </div>
            <div class="team-blurb">
               <span class="team-header">Why: </span>
               I feel it is my responsibility to make sure the spaces in which I work/live are as inclusive as possible. I enjoy using my web dev skills to further the gay agenda.
            </div>
            <div class="team-blurb">
               <span class="team-header">I'm Excited About... </span>
               interacting with our lovely hackers in person! (hopefully)
            </div>
         </div>

         <div class="team-section card purple-scheme">
            <div class="team-bio">
               <img src={require("../img/karina_headshot.jpg")} alt="karina headshot" class="team-image" width="225px" />
               <div class="team-bio-text">
                  <h1>Karina Ting <span class="names-pronouns">(she/her/hers)</span></h1>
                  <div class="team-blurb">
                     <span class="team-header">Role: </span>
                     finance
                  </div>
                  <div class="team-blurb">
                     <span class="team-header">Major; Year: </span>
                     mechanical engineering, 2022
                  </div>
               </div>
            </div>
            <div class="team-blurb">
               <span class="team-header">What I Do: </span>
               As finance chair, I help out with calculating and minimizing the costs in our budget, which include venue, catering, prizes, swag, etc. I'll also be working on funding applications so we can get money to help cover these costs.
            </div>
            <div class="team-blurb">
               <span class="team-header">Why: </span>
               I work on qwer hacks because diversity and representation in tech is so important! I feel incredibly lucky that I get to work with the everyone on the qwer hacks team to help create an inclusive and celebratory space for our community.
            </div>
            <div class="team-blurb">
               <span class="team-header">I'm Excited About... </span>
               I'm excited to see all the creative and impactful products that our hackers build!
            </div>
         </div>
      </div>
   );
}

export default About;
