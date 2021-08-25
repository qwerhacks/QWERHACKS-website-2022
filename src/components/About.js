import React from 'react';

function About() {
   return (
      <div className="About" class="card yellow-scheme">
         <h1><div>About</div></h1>
         <div class="team">
            <h2>Team:</h2>
            <div class="names">
               <div class="names-col">
                  <div> christine kim <span class="names-pronouns">(they/she)</span></div>
                  <div> diantha ngo <span class="names-pronouns">(she/her)</span></div>
                  <div> karina ting <span class="names-pronouns">(she/her)</span></div>
                  <div> rithika srinivasan <span class="names-pronouns">(she/her)</span></div>
               </div>
               <div class="names-col">
                  <div> spurthi rallapalli <span class="names-pronouns">(she/her)</span></div>
                  <div> tanya zhong <span class="names-pronouns">(she/her)</span></div>
                  <div> vaughn chu <span class="names-pronouns">(he/him)</span></div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;
