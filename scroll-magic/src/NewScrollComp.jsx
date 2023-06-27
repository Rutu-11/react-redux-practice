import React, { useEffect, useRef } from 'react';
import ScrollMagic from 'react-scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

const ScrollMagicExample = () => {
    const scrollMagicContainerRef = useRef(null);
    const animate1Ref = useRef(null);
    const animate2Ref = useRef(null);

    useEffect(() => {
        const controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({ triggerElement: '#trigger1' })
            .setTween('#animate1', 0.5, { backgroundColor: 'green', scale: 2.5 })
            .addIndicators({ name: '1 (duration: 0)' })
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: '#trigger2', duration: 300 })
            .setTween('#animate2', { borderTop: '30px solid white', backgroundColor: 'blue', scale: 0.7 })
            .addIndicators({ name: '2 (duration: 300)' })
            .addTo(controller);
    }, []);

    return (
        <div className="scrollContent" ref={scrollMagicContainerRef}>
            <section id="titlechart">
                <div id="description">
                    <h1 className="badge gsap">Simple Tweening</h1>
                    <h2>Two examples of basic animation.</h2>
                    <ol>
                        <li>When no duration is defined for the scene, the tween will simply start playing when the scroll reaches the trigger position.</li>
                        <li>If the scene has a duration, the progress of the tween will directly correspond to the scroll position.</li>
                    </ol>
                    <p>
                        This example uses the shorthand version of <a href="../../docs/animation.GSAP.html#Scene.setTween">Scene.setTween()</a> to add <a href="http://greensock.com/docs/#/HTML5/GSAP/TweenMax/to/" target="_blank">TweenMax.to()</a> animations.<br />
                        To see how to build more advanced tweens, check out the <a href="../advanced/advanced_tweening.html">Advanced Tweening Example</a>.
                    </p>
                    <a href="#" className="viewsource">view source</a>
                </div>
                <script>{`var controller = new ScrollMagic.Controller();`}</script>
            </section>
            <section className="demo">
                <div className="spacer s2" />
                <div id="trigger1" className="spacer s0" />
                <div id="animate1" className="box2 skin" ref={animate1Ref}>
                    <p>You wouldn't like me when I'm angry!</p>
                    <a href="#" className="viewsource">view source</a>
                </div>
                <div className="spacer s2" />
                <script>{`var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1" })
                            .setTween("#animate1", 0.5, { backgroundColor: "green", scale: 2.5 })
                            .addIndicators({ name: "1 (duration: 0)" })
                            .addTo(controller);`}</script>
            </section>
            <section className="demo">
                < div className="spacer s1">
                </div>
                <div id="trigger2" className="spacer s1"></div>
                <div className="spacer s0"></div>
                <div id="animate2" className="box1 black" ref={animate2Ref}>
                    <p>Smurf me!</p>
                    <a href="#" className="viewsource">view source</a>
                </div>
                <div className="spacer s2"></div>
                <script>{`var scene = new ScrollMagic.Scene({ triggerElement: "#trigger2", duration: 300 })
                .setTween("#animate2", { borderTop: "30px solid white", backgroundColor: "blue", scale: 0.7 })
                .addIndicators({ name: "2 (duration: 300)" })
                .addTo(controller);`}</script>
            </section>
            <div className="spacer s_viewport"></div>
        </div>
    );
};
export default ScrollMagicExample;