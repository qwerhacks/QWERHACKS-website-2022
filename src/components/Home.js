import React from "react";

function Home() {

    return (
        <div>
            <div class="home-info card purple-scheme">
                <div id="home-title">
                    <h1>QWER Hacks</h1>
                    january 21-23, 2022
                    {/* <img src={require("../img/qh_logo.png")} alt="website logo" class="footer-logo" width="400px" /> */}
                </div>
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
                <div class="tracks-section card green-scheme">
                    <img src={require("../img/c&c_circle.png")} alt="community and connection" class="tracks-image" width="200px" />
                    <div class="tracks-blurb">
                        technology can strengthen communities — create a hack to promote healthy communities and connection!
                    </div>
                </div>
                <div class="tracks-section card blue-scheme">
                    <img src={require("../img/h&w_circle.png")} alt="health and wellness" class="tracks-image" width="200px" />
                    <div class="tracks-blurb">
                        technology has become a big contributor to the health and wellness field. create a hack that encourages mental, physical, and/or emotional wellbeing!
                    </div>
                </div>
                <div class="tracks-section card yellow-scheme">
                    <img src={require("../img/l&g_circle.png")} alt="learning and growth" class="tracks-image" width="200px" />
                    <div class="tracks-blurb">
                        seeking education is one way to learn and develop. create a hack to share what helps you grow and motivate others!
                    </div>
                </div>
                <div class="tracks-section card peach-scheme">
                    <img src={require("../img/a&e_circle.png")} alt="art and expression" class="tracks-image" width="200px" />
                    <div class="tracks-blurb">
                        engineering and art are often intertwined. create a hack to express yourself and showcase your artistry!
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;