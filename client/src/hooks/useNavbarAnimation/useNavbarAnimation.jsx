import {config, useSpring} from "react-spring";

export default () => {
    const barAnimation = useSpring({
        from: {transform: "translate3d(0, -10rem, 0)"},
        transform: "translate3d(0, 0, 0)",
    });
    const linkAnimation = useSpring({
        from: {transform: "translate3d(0, 30px, 0)", opacity: 0},
        to: {transform: "translate3d(0, 0, 0)", opacity: 1},
        delay: 800,
        config: config.wobbly,
    });
    return {barAnimation, linkAnimation}
}
