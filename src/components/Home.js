import React from "react";

function Home() {

    return (
        <div >
            {/* <div id="home-title" class="card purple-scheme"> */}
            <div id="home-title" >
                <h1>QWER Hacks</h1>
                january 21-23, 2022
                {/* <img src={require("../img/qh_logo.png")} alt="website logo" class="footer-logo" width="400px" /> */}

            </div>
            <div class="home-info card peach-scheme">
                <p>we're back and ready to hack!! qwer hacks @ ucla is major league hacking's first
                    LGBTQIA+ hackathon that celebrates the queer and trans community in STEM. we bring
                    together queer individuals and allies through tech talks, technical and community-building
                    workshops, and development of innovative projects to help underrepresented groups!</p>
                <p>presenting our theme for this year: embracing identity through self empowerment.
                    through our four tracks listed below, you’ll find ways to meld your unique perspective
                    and experiences into technologies that highlight your individuality and improve the
                    world around you.</p>
            </div>
            <div class="tracks">
                <div class="box">
                    <div class="box card yellow-scheme">
                        <img src={require("../img/c&c_circle.png")} alt="healthcare track" class="t" width="225px" />
                        <div>
                            seeking education is one way to learn and develop. create a hack to share what helps you grow and motivate others!
                        </div>
                    </div>
                    <div class="box">
                        <img src={require("../img/h&w_circle.png")} alt="healthcare track" class="t" width="225px" />
                    </div>
                    <div class="box">
                        <img src={require("../img/l&g_circle.png")} alt="healthcare track" class="t" width="225px" />
                    </div>
                    <div class="box">
                        <img src={require("../img/a&e_circle.png")} alt="healthcare track" class="t" width="225px" />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;