// A tween can change a single property of a single object over time
// gsap.to('.header', {x: 750, duration: 3}); -> '.header': is a target, {x: 750, duration: 3}: vars object

// Tweens: is what makes the anmations work, can be created by using gsap.to, gsap.from, gsap.fromTo
// Timeline is a container for multiple tweens where you can set the seauience of the animations
// stagger: 1s between the start of each item

// gsap.to('h1', { stagger: 1, x: 400, rotation: 360, color: 'yellow', duration: 3})

// scale, rotation,skewX/Y, 

// gsap.to('.fred', {x: 400, y: 200, scale: 2, rotation: 360, duration: 3})

// from(): animation starts from the values specified in the object to its inicial value

// gsap.from('.fred', { x: 400, y: 200, scale: 2, rotation: 360, duration: 3 })

// fromTo(): has got vars object specified for the beginning and for animation end

// gsap.fromTo('.fred', { x: 700, y: 400, opacity: 0}, { x: 400, y: 200, scale: 2, opacity: 1, duration: 3 })

// delay: how much time should transpire before animation begins
// repeat: how many times the animation should repeat
// yoyo: when set to true the animation will play back and forth
// repeatDelay: how much time should transpire between each repeat
// an animation repeats indefinitely: repeat:-1

gsap.to('.fred', { x: 400, duration: 3, repeat: -1, yoyo: true})
gsap.to('.fredPink', { x: 400, duration: 3 })
