import React from "react";

function Schedule(props) {

  return (
    <div class="schedule card green-scheme">
      <h1>Schedule</h1>
      <br></br>
      <h3><b>friday 1/21</b></h3>
      <ul>
        <li class="session">
          <div class="when"><b>7:00pm-8:00pm PST</b></div>
          <div class="topic">check-in</div>
        </li>
        <li class="session">
          <div class="when"><b>8:00pm-8:30pm PST</b></div>
          <div class="topic">opening presentation</div>
        </li>
        <li class="session">
          <div class="when"><b>8:30pm-9:30pm PST</b></div>
          <div class="topic">track introductions</div>
        </li>
        <li class="session">
          <div class="when"><b>9:30pm PST</b></div>
          <div class="topic"><b><i>hacking begins</i></b></div>
        </li>
        <li class="session">
          <div class="when"><b>9:30pm-10:15pm PST</b></div>
          <div class="topic">workshop: "hackathon survival guide + team formation"</div>
        </li>
        <li class="session">
          <div class="when"><b>10:15pm-11:15pm PST</b></div>
          <div class="topic">workshop: "git version control"</div>
        </li>
      </ul>

      <h3><b>saturday 1/22</b></h3>
      <ul>
        <li class="session">
          <div class="when"><b>9:00am-10:00am PST</b></div>
          <div class="topic">workshop: "career fair pitching"</div>
        </li>
        <li class="session">
          <div class="when"><b>10:00am-10:30am PST</b></div>
          <div class="topic">workshop: "building accessible products in healthcare"</div>
        </li>
        <li class="session">
          <div class="when"><b>10:30am-11:00am PST</b></div>
          <div class="topic">robinhood virtual networking session</div>
        </li>
        <li class="session">
          <div class="when"><b>11:00am-12:00pm PST</b></div>
          <div class="topic">career fair</div>
        </li>
        <li class="session">
          <div class="when"><b>12:00pm-12:30pm PST</b></div>
          <div class="topic">cia workshop 1</div>
        </li>
        <li class="session">
          <div class="when"><b>12:30pm-1:00pm PST</b></div>
          <div class="topic">cia workshop 2</div>
        </li>
        <li class="session">
          <div class="when"><b>1:00pm-2:00pm PST</b></div>
          <div class="topic">workshop: "intro to react" </div>
        </li>
        <li class="session">
          <div class="when"><b>2:00pm-2:30pm PST</b></div>
          <div class="topic">workshop: "accidental activism in academia"</div>
        </li>
        <li class="session">
          <div class="when"><b>2:30pm-3:30pm PST</b></div>
          <div class="topic">workshop: "intro to firebase"</div>
        </li>
        <li class="session">
          <div class="when"><b>3:30pm-4:00pm PST</b></div>
          <div class="topic">identity specific workshop 1</div>
        </li>
        <li class="session">
          <div class="when"><b>4:00pm-5:00pm PST</b></div>
          <div class="topic">workshop: "intro to deep learning"</div>
        </li>
        <li class="session">
          <div class="when"><b>5:30pm-6:00pm PST</b></div>
          <div class="topic">workshop: "imposter syndrome"</div>
        </li>
        <li class="session">
          <div class="when"><b>6:00pm-6:30pm PST</b></div>
          <div class="topic">workshop: "game prototyping"</div>
        </li>
        <li class="session">
          <div class="when"><b>6:30pm-7:00 PST</b></div>
          <div class="topic">workshop: "how diversity improves products"</div>
        </li>
        <li class="session">
          <div class="when"><b>8:00pm-9:00pm PST</b></div>
          <div class="topic">workshop: "Rebuilding Trust: Making Artificial Intelligence Queer-Inclusive"</div>
        </li>
        <li class="session">
          <div class="when"><b>9:00pm-10:00pm PST</b></div>
          <div class="topic">activity: "werewolf" hosted by mlh</div>
        </li>
      </ul>

      <h3><b>sunday 1/23</b></h3>
      <ul>
        <li class="session">
          <div class="when"><b>9:00am PST</b></div>
          <div class="topic"><i>devpost submission due</i></div>
        </li>
        <li class="session">
          <div class="when"><b>12:00am PST</b></div>
          <div class="topic"><b><i>hacking ends</i></b></div>
        </li>
        <li class="session">
          <div class="when"><b>10:00am-11:30am PST</b></div>
          <div class="topic">judging</div>
        </li>
        <li class="session">
          <div class="when"><b>10:00am-10:30am PST</b></div>
          <div class="topic">identity specific workshop 2</div>
        </li>
        <li class="session">
          <div class="when"><b>12:30pm-2:00pm PST</b></div>
          <div class="topic"> closing presentation + awards</div>
        </li>
      </ul>
    </div>
  );

}

export default Schedule;