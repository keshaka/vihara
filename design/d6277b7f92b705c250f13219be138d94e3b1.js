(function(){function t(f){return-1!==f.toString().search(/\./g)?parseFloat(f):.01*parseInt(f,10)}function p(f){return!0===f||"true"===f||1===f||"1"===f||"on"===f?!0:!1}function h(f,h,C){return Math.max(Math.min(f,C),f,h)}function D(f){f=f.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(f,h,p,u){return h+h+p+p+u+u});return(f=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(f))?{r:parseInt(f[1],16),g:parseInt(f[2],16),b:parseInt(f[3],16)}:null}window.RsParticlesAddOn=function(f){function G(a,e){if(f.revcurrentslide()!==x)E(!1,e);else{var g=e.currentslide.data("pjs");g&&g.instance.pJS.resizeFunction&&g.instance.pJS.sliderResized&&(g.instance.pJS.resizeFunction(),g.instance.pJS.sliderResized=!1)}}function C(a,e){f.off(".rsparticles");var g=e.currentslide.off(".rsparticles"),r=g.data("pjs");r&&(r.instance.pJS.resizeFunction&&(r.instance.pJS.sliderResized=!1,f.off("revolution.slide.afterdraw",r.instance.pJS.resizeFunction)),r.el.off(".rsparticles"),punchgs.TweenLite.to(r.el,.3,{opacity:0,ease:punchgs.Linear.easeNone,onComplete:function(){r.instance.pJS.fn.vendors.destroypJS();g.removeData("pjs").find(".rs-particles-canvas").remove()}}))}function E(a,e){var g=e.currentslide;!g||g instanceof jQuery||(g=jQuery(g));g&&g.length||(g=f.find("rs-slide").eq(0));if(e=g.data("particles")){e=jQuery.extend(!0,{},e);var r=g.attr("data-particlesindex");var l=g;var k=e,m=g.attr("data-particlesid"),n=document.createElement("canvas");n.className="rs-particles-canvas";n.style.zIndex=r;n.id=m;r=k.carousel?l:f;l.append(jQuery(n));l={instance:new H(n,k,r,f),el:jQuery(n)};g.data("pjs",l);punchgs.TweenLite.to(l.el,.5,{opacity:1,ease:punchgs.Linear.easeNone})}x=f.revcurrentslide()}if(f){var u=jQuery.fn.revolution&&jQuery.fn.revolution[f[0].id]?jQuery.fn.revolution[f[0].id]:!1;if(u){var A=f.find("rs-slide"),B="carousel"===u.sliderType,x=0;A.each(function(){var a=jQuery(this),e=a.attr("data-rsparticles");if(e){e=JSON.parse(e);e=jQuery.extend(!0,{particles:{shape:"circle",number:80,size:6,sizeMin:1,random:!0},styles:{border:{enable:!1,color:"#ffffff",opacity:100,size:1},lines:{enable:!1,color:"#ffffff",width:1,opacity:100,distance:150},particle:{color:"#ffffff",opacity:100,opacityMin:25,opacityRandom:!1,zIndex:"default"}},movement:{enable:!0,randomSpeed:!0,speed:1,speedMin:1,direction:"none",straight:!0,bounce:!1},interactivity:{hoverMode:"none",clickMode:"none"},bubble:{distance:400,size:40,opacity:40},grab:{distance:400,opacity:50},repulse:{distance:200,easing:100},pulse:{size:{enable:!1,speed:40,min:1,sync:!1},opacity:{enable:!1,speed:3,min:1,sync:!1}}},e);var g=e.styles.border.enable?e.styles.border.size:0,f="none"===e.interactivity.hoverMode?!1:!0,l="none"===e.interactivity.clickMode?!1:!0,k=e.movement.direction,m=!p(e.movement.straight),n=p(e.movement.randomSpeed),q=e.movement.bounce?"bounce":"out";"none"===k?m=!1:"static"===k&&(k="none",m=!0,n=!1);var v=e.styles.particle.zIndex,b={value:h(parseInt(e.particles.number,10),1,500)},d={value:e.styles.particle.color};g={width:parseInt(g,10),color:e.styles.border.color,opacity:h(t(e.styles.border.opacity),0,1)};var c=e.particles.shape;c=c.split(",");for(var I=c.length,y="",w=0;w<I;w++)0<w&&(y+=","),y=F.hasOwnProperty(c[w])?y+F[c[w]]:y+c[w];e={zIndex:v,particles:{number:b,color:d,shape:{type:"image",stroke:g,image:{src:y}},opacity:{value:h(t(e.styles.particle.opacity),.1,1),random:p(e.styles.particle.opacityRandom),min:h(t(e.styles.particle.opacityMin),.1,1),anim:{enable:p(e.pulse.opacity.enable),speed:parseFloat(e.pulse.opacity.speed),opacity_min:h(t(e.pulse.opacity.min),0,1),sync:p(e.pulse.opacity.sync)}},size:{value:h(parseInt(e.particles.size,10),1,250),random:p(e.particles.random),min:h(parseInt(e.particles.sizeMin,10),.1,250),anim:{enable:p(e.pulse.size.enable),speed:parseFloat(e.pulse.size.speed),size_min:h(parseFloat(e.pulse.size.min),.1,250),sync:p(e.pulse.size.sync)}},line_linked:{enable:p(e.styles.lines.enable),distance:parseInt(e.styles.lines.distance,10),color:e.styles.lines.color,opacity:h(t(e.styles.lines.opacity),0,1),width:parseInt(e.styles.lines.width,10)},move:{enable:p(e.movement.enable),speed:h(parseInt(e.movement.speed,10),1,50),direction:k,random:n,min_speed:h(parseInt(e.movement.speedMin,10),1,50),straight:m,out_mode:q}},interactivity:{events:{onhover:{enable:f,mode:e.interactivity.hoverMode},onclick:{enable:l,mode:e.interactivity.clickMode}},modes:{grab:{distance:parseFloat(e.grab.distance),line_linked:{opacity:h(t(e.grab.opacity),.1,1)}},bubble:{distance:parseFloat(e.bubble.distance),size:parseFloat(e.bubble.size),opacity:h(t(e.bubble.opacity),0,1)},repulse:{distance:parseFloat(e.repulse.distance),easing:parseInt(e.repulse.easing,10)}}}};e.carousel=B;a.data("particles",e)}});var a=f[0].id;A.each(function(){var a=jQuery(this),e=a.data("particles");if(e){var g=e.particles,f=g.line_linked,l=g.shape,k=g.color,m=l.stroke,n=m.width,q=e.interactivity;var h=q.events.onhover;var b=q.events.onclick;"none"!==h.mode&&"bubble"===b.mode&&(b.mode="none");h.enable&&"bubble"===h.mode||b.enable&&"bubble"===b.mode?(q=q.modes.bubble.size,q>g.size.value&&(g.size.drawSize=Math.ceil(q*Math.PI))):g.size.drawSize=2*g.size.value;k.value=k.value.split(",");if(n){g=m.color.split(",");k=m.opacity;for(q=g.length;q--;)b=g[q].replace("#",""),b="rgba("+parseInt(b.substring(0,2),16)+","+parseInt(b.substring(2,4),16)+","+parseInt(b.substring(4,6),16),b=k?b+(","+k.toFixed(2)+")"):b+")",g[q]=b;m.color=g}else m.color=m.color.split(",");if(f.enable||h.enable&&"grab"===h.mode)for(m=f.color=f.color.split(","),f=m.length;f--;)m[f]=D(m[f]);if("image"===l.type)for(l.image.src=l.image.src.split(","),m=l.image.src.length,f=0;f<m;f++)k=l.image.src[f],"circle"!==k?(h="<path ",g=' d="'+k+'"></path>',k=-1===k.search("::")?24:k.split("::")[1]):(h='<circle cx="12" cy="12" r="12" ',g=" />",k=24),h='<svg xmlns="http://www.w3.org/2000/svg" width="'+k+'" height="'+k+'" viewBox="{{viewbox}}">'+h+'fill="#ffffff" stroke="{{stroke-color}}" stroke-width="{{stroke-width}}"'+g+"</svg>",n?(g=2*n+parseInt(k,10),k=h.replace("{{stroke-width}}",n).replace("{{viewbox}}",-n+" "+-n+" "+g+" "+g)):k=h.replace("{{viewbox}}","0 0 "+k+" "+k).replace("{{stroke-width}}",0),l.image.src[f]=k;a.data("particles",e)}});f.one("revolution.slide.onchange",function(h,e){var g=e.currentSlide;!g||g instanceof jQuery||(g=jQuery(g));g&&g.length||(g=f.find("rs-slide").eq(0));var r=a+"-tp-particles-",l;f.find("rs-slide").each(function(a){var e=jQuery(this),f=e.data("particles");if(f){var g=f.zIndex;f=f.interactivity.events;f=f.onhover.enable||f.onclick.enable;"default"===g&&(g=0);f&&(f=e.find(".slidelink"),f.length?(l=!0,"back"!==e.data("seoz")?g=999:f.closest("rs-layer-wrap").css("z-index",1),this.className+=" rs-particles-slidelink"):this.className+=" rs-particles-interactive");this.setAttribute("data-particlesid",r+(a+1));this.setAttribute("data-particlesindex",g)}});if(l)jQuery("body").off("click.rsparticles").on("click.rsparticles",".rs-particles-canvas",function(){var a=jQuery(this).prev("rs-parallax-wrap").find("rs-slide[data-link] a","rs-slide[data-linktoslide] a");a.length&&(a[0].href?"_blank"!==a[0].target?window.location=a[0].href:window.open(a[0].href):a.click())});f.on("revolution.slide.onbeforeswap",C);if(B)f.on("revolution.slide.carouselchange",G);else f.on("revolution.slide.onafterswap",E)})}}};var F={edge:"M4 4h16v16H4z",triangle:"M12 6L4 20L20 20z",polygon:"M5 4 L17 4 L22 12 L17 20 L8 20 L3 12 L8 4 Z",star:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",heart_1:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",star_2:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z",settings:"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",arrow_1:"M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z",bullseye:"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z",plus_1:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",triangle_2:"M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z",smilie:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z",star_3:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",heart_2:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",plus_2:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",close:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",arrow_2:"M22 12l-4-4v3H3v2h15v3z",dollar:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",sun_1:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z",sun_2:"M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z",snowflake:"M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z",party:"M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z",flower_1:"M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-1.79-1.03-4.07-1.11-6 0-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-1.92-1.11-4.2-1.03-6 0 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19 1.79 1.03 4.07 1.11 6 0 .28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54 1.92 1.11 4.2 1.03 6 0-.01-2.07-1.08-4.08-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z",flower_2:"M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z",fire:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z",pizza:"M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},H=function(f,h,p,t){function u(b,d,c,e,f,g,h,k){e!=f&&(a.tmp.bubble_duration_end?void 0!=g&&(d=e+(e-(h-c*(h-e)/a.interactivity.modes.bubble.duration)),"size"===k&&(b.radius_bubble=d),"opacity"===k&&(b.opacity_bubble=d)):d<=a.interactivity.modes.bubble.distance?(void 0!=g?g:h)!=e&&(d=h-c*(h-e)/a.interactivity.modes.bubble.duration,"size"===k&&(b.radius_bubble=d),"opacity"===k&&(b.opacity_bubble=d)):("size"===k&&(b.radius_bubble=void 0),"opacity"===k&&(b.opacity_bubble=void 0)))}function A(){a.tmp.repulse_clicking=!1}function B(b,d,c,f){d=b.replace(/#([0-9A-F]{3,6})/gi,d).replace("{{stroke-color}}",c);b=new Image;d="data:image/svg+xml;base64,"+btoa(d);c=document.createElement("canvas");var g=c.getContext("2d");c.width=c.height=f;b.addEventListener("load",function(){g.webkitImageSmoothingEnabled=!1;g.msImageSmoothingEnabled=!1;g.imageSmoothingEnabled=!1;g.drawImage(this,0,0,f,f);a.cachedSvg[a.cachedSvg.length]=g.canvas;e++;e===m&&x()});b.src=d}function x(){a.fn.vendors.eventsListeners();a.fn.vendors.start()}
var a=this.pJS={canvas:{el:f,w:f.offsetWidth,h:f.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,min:.1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,drawSize:40,random:!1,min:1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!1,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,min_speed:1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3E3,rotateY:3E3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4,easing:100},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,offset:p.offset(),fn:{interact:{},modes:{},vendors:{}},tmp:{}},z=this;a=jQuery.extend(!0,a,h);this.size_value=a.particles.size.value;a.tmp.obj={size_value:a.particles.size.value,size_anim_speed:a.particles.size.anim.speed,move_speed:a.particles.move.speed,line_linked_distance:a.particles.line_linked.distance,line_linked_width:a.particles.line_linked.width,mode_grab_distance:a.interactivity.modes.grab.distance,mode_bubble_distance:a.interactivity.modes.bubble.distance,mode_bubble_size:a.interactivity.modes.bubble.size,mode_repulse_distance:a.interactivity.modes.repulse.distance};a.tmp.count_svg=0;a.fn.retinaInit=function(){a.retina_detect&&1<window.devicePixelRatio?(a.canvas.pxratio=window.devicePixelRatio,a.tmp.retina=!0):(a.canvas.pxratio=1,a.tmp.retina=!1);a.canvas.w=a.canvas.el.offsetWidth*a.canvas.pxratio;a.canvas.h=a.canvas.el.offsetHeight*a.canvas.pxratio;a.particles.size.value=a.tmp.obj.size_value*a.canvas.pxratio;a.particles.size.anim.speed=a.tmp.obj.size_anim_speed*a.canvas.pxratio;a.particles.move.speed=a.tmp.obj.move_speed*a.canvas.pxratio;a.particles.line_linked.distance=a.tmp.obj.line_linked_distance*a.canvas.pxratio;a.interactivity.modes.grab.distance=a.tmp.obj.mode_grab_distance*a.canvas.pxratio;a.interactivity.modes.bubble.distance=a.tmp.obj.mode_bubble_distance*a.canvas.pxratio;a.particles.line_linked.width=a.tmp.obj.line_linked_width*a.canvas.pxratio;a.interactivity.modes.bubble.size=a.tmp.obj.mode_bubble_size*a.canvas.pxratio;a.interactivity.modes.repulse.distance=a.tmp.obj.mode_repulse_distance*a.canvas.pxratio};a.fn.canvasInit=function(){a.canvas.ctx=a.canvas.el.getContext("2d")};a.fn.canvasSize=function(){a.canvas.el.width=a.canvas.w;a.canvas.el.height=a.canvas.h;a&&a.interactivity.events.resize&&(a.resizeFunction=function(){a.offset=p.offset();a.canvas.w=a.canvas.el.offsetWidth;a.canvas.h=a.canvas.el.offsetHeight;a.tmp.retina&&(a.canvas.w*=a.canvas.pxratio,a.canvas.h*=a.canvas.pxratio);a.canvas.el.width=a.canvas.w;a.canvas.el.height=a.canvas.h;a.particles.move.enable||(a.fn.particlesEmpty(),a.fn.particlesCreate(),a.fn.particlesDraw(),a.fn.vendors.densityAutoParticles());a.sliderResized=!0;a.fn.vendors.densityAutoParticles()},t.on("revolution.slide.afterdraw",a.resizeFunction))};a.fn.canvasPaint=function(){a.canvas.ctx.fillRect(0,0,a.canvas.w,a.canvas.h)};a.fn.canvasClear=function(){a.canvas.ctx.clearRect(0,0,a.canvas.w,a.canvas.h)};a.fn.particle=function(b,d,c){d=a.particles.size.value;if(a.particles.size.random){var e=a.particles.size.min;d=Math.random()*(d-e)+e;0===d&&(d=1)}this.osize=this.radius=d;a.particles.size.anim.enable&&(this.size_status=!1,this.vs=a.particles.size.anim.speed/100,a.particles.size.anim.sync||(this.vs*=Math.random()));this.x=c?c.x:Math.random()*a.canvas.w;this.y=c?c.y:Math.random()*a.canvas.h;this.x>a.canvas.w-2*this.radius?this.x-=this.radius:this.x<2*this.radius&&(this.x+=this.radius);this.y>a.canvas.h-2*this.radius?this.y-=this.radius:this.y<2*this.radius&&(this.y+=this.radius);a.particles.move.bounce&&a.fn.vendors.checkOverlap(this,c);c=a.particles.move.speed;d=a.particles.move.min_speed;a.particles.move.random&&(c=Math.round(Math.random()*(c-d)+d),1>c&&(c=1));this.spd=c;this.color={};"object"===typeof b.value?b.value instanceof Array?this.color.rgb=D(b.value[Math.floor(Math.random()*a.particles.color.value.length)]):(void 0!=b.value.r&&void 0!=b.value.g&&void 0!=b.value.b&&(this.color.rgb={r:b.value.r,g:b.value.g,b:b.value.b}),void 0!=b.value.h&&void 0!=b.value.s&&void 0!=b.value.l&&(this.color.hsl={h:b.value.h,s:b.value.s,l:b.value.l})):"random"===b.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"===typeof b.value&&(this.color=b,this.color.rgb=D(this.color.value));b=a.particles.shape.stroke.color;this.strokeColor=b[Math.floor(Math.random()*b.length)];b=a.particles.line_linked.color;this.lineColor=b[Math.floor(Math.random()*b.length)];b=a.particles.opacity.value;c=a.particles.opacity.min;a.particles.opacity.random&&(b=Math.random()*(b-c)+c);this.opacity=this.opc=b;a.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=a.particles.opacity.anim.speed/100,a.particles.opacity.anim.sync||(this.vo*=Math.random()));c=b=0;switch(a.particles.move.direction){case "top":c=-1;break;case "top-right":b=.5;c=-.5;break;case "right":b=1;break;case "bottom-right":c=b=.5;break;case "bottom":c=1;break;case "bottom-left":b=-.5;c=1;break;case "left":b=-1;break;case "top-left":c=b=-.5}a.particles.move.straight?(this.vx=b,this.vy=c):(this.vx=b+Math.random()-.5,this.vy=c+Math.random()-.5);this.vx_i=this.vx;this.vy_i=this.vy;b=a.particles.shape.type;"object"===typeof b?b instanceof Array&&(this.shape=b[Math.floor(Math.random()*b.length)]):this.shape=b;"image"===this.shape&&(b=a.particles.shape,this.img={src:b.image.src,ratio:b.image.width/b.image.height},this.img.ratio||(this.img.ratio=1),"svg"===a.tmp.img_type&&void 0!=a.tmp.source_svg&&(a.fn.vendors.createSvgImg(this),a.tmp.pushing&&(this.img.loaded=!1)))};a.fn.particle.prototype.drawSVG=function(b,d){a.canvas.ctx.drawImage(b,this.x-d,this.y-d,2*d,2*d/this.img.ratio)};a.fn.particle.prototype.draw=function(){var b=void 0!=this.radius_bubble?this.radius_bubble:this.radius;var d=void 0!=this.opacity_bubble?this.opacity_bubble:this.opacity;a.canvas.ctx.fillStyle=this.color.rgb?"rgba("+this.color.rgb.r+","+this.color.rgb.g+","+this.color.rgb.b+","+d+")":"hsla("+this.color.hsl.h+","+this.color.hsl.s+"%,"+this.color.hsl.l+"%,"+d+")";a.canvas.ctx.beginPath();a.canvas.ctx.globalAlpha=d;(d="svg"===a.tmp.img_type?this.img.obj:a.tmp.img_obj)&&this.drawSVG(d,b);a.canvas.ctx.globalAlpha=1;a.canvas.ctx.closePath()};a.fn.particlesCreate=function(){for(var b=a.particles.number.value,d=a.particles.array,c=0;c<b;c++)d[d.length]=new a.fn.particle(a.particles.color,a.particles.opacity.value)};a.fn.particlesUpdate=function(){for(var b=a.particles.array.length,d=0;d<b;d++){var c=a.particles.array[d];if(a.particles.move.enable){var e=c.spd/2;c.x+=c.vx*e;c.y+=c.vy*e}a.particles.opacity.anim.enable&&(1==c.opacity_status?(c.opacity>=c.opc&&(c.opacity_status=!1),c.opacity+=c.vo):(c.opacity<=a.particles.opacity.anim.opacity_min&&(c.opacity_status=!0),c.opacity-=c.vo),0>c.opacity&&(c.opacity=0));a.particles.size.anim.enable&&(1==c.size_status?(c.radius>=a.particles.size.value&&(c.size_status=!1),c.radius+=c.vs):(c.radius<=a.particles.size.anim.size_min&&(c.size_status=!0),c.radius-=c.vs),0>c.radius&&(c.radius=0));if("bounce"===a.particles.move.out_mode){e=c.radius;var f=a.canvas.w;var g=c.radius;var h=a.canvas.h}else e=-c.radius,f=a.canvas.w+c.radius,g=-c.radius,h=a.canvas.h+c.radius;c.x-c.radius>a.canvas.w?(c.x=e,c.y=Math.random()*a.canvas.h):0>c.x+c.radius&&(c.x=f,c.y=Math.random()*a.canvas.h);c.y-c.radius>a.canvas.h?(c.y=g,c.x=Math.random()*a.canvas.w):0>c.y+c.radius&&(c.y=h,c.x=Math.random()*a.canvas.w);switch(a.particles.move.out_mode){case "bounce":c.x+c.radius>a.canvas.w?c.vx=-c.vx:0>c.x-c.radius&&(c.vx=-c.vx),c.y+c.radius>a.canvas.h?c.vy=-c.vy:0>c.y-c.radius&&(c.vy=-c.vy)}-1<a.interactivity.events.onhover.mode.indexOf("grab")&&a.fn.modes.grabParticle(c);(-1<a.interactivity.events.onhover.mode.indexOf("bubble")||-1<a.interactivity.events.onclick.mode.indexOf("bubble"))&&a.fn.modes.bubbleParticle(c);(-1<a.interactivity.events.onhover.mode.indexOf("repulse")||-1<a.interactivity.events.onclick.mode.indexOf("repulse"))&&a.fn.modes.repulseParticle(c);if(a.particles.line_linked.enable||a.particles.move.attract.enable)for(e=a.particles.array.length,f=d+1;f<e;f++)g=a.particles.array[f],a.particles.line_linked.enable&&a.fn.interact.linkParticles(c,g),a.particles.move.attract.enable&&a.fn.interact.attractParticles(c,g),a.particles.move.bounce&&a.fn.interact.bounceParticles(c,g)}};a.fn.particlesDraw=function(){a.canvas.ctx.clearRect(0,0,a.canvas.w,a.canvas.h);a.fn.particlesUpdate();for(var b=a.particles.array.length,d=0;d<b;d++)a.particles.array[d].draw()};a.fn.particlesEmpty=function(){a.particles.array=[]};a.fn.particlesRefresh=function(){cancelAnimationFrame(a.fn.checkAnimFrame);cancelAnimationFrame(a.fn.drawAnimFrame);a.tmp.source_svg=void 0;a.tmp.img_obj=void 0;a.tmp.count_svg=0;a.fn.particlesEmpty();a.fn.canvasClear();a.fn.vendors.start()};a.fn.interact.linkParticles=function(b,d){var c=b.x-d.x,e=b.y-d.y;c=Math.sqrt(c*c+e*e);c<=a.particles.line_linked.distance&&(c=a.particles.line_linked.opacity-c/(1/a.particles.line_linked.opacity)/a.particles.line_linked.distance,0<c&&(e=b.lineColor,a.canvas.ctx.strokeStyle="rgba("+e.r+","+e.g+","+e.b+","+c+")",a.canvas.ctx.lineWidth=a.particles.line_linked.width,a.canvas.ctx.beginPath(),a.canvas.ctx.moveTo(b.x,b.y),a.canvas.ctx.lineTo(d.x,d.y),a.canvas.ctx.stroke(),a.canvas.ctx.closePath()))};a.fn.interact.attractParticles=function(b,d){var c=b.x-d.x,e=b.y-d.y;Math.sqrt(c*c+e*e)<=a.particles.line_linked.distance&&(c/=1E3*a.particles.move.attract.rotateX,e/=1E3*a.particles.move.attract.rotateY,b.vx-=c,b.vy-=e,d.vx+=c,d.vy+=e)};a.fn.interact.bounceParticles=function(a,d){var b=a.x-d.x,e=a.y-d.y;Math.sqrt(b*b+e*e)<=a.radius+d.radius&&(a.vx=-a.vx,a.vy=-a.vy,d.vx=-d.vx,d.vy=-d.vy)};a.fn.modes.pushParticles=function(b,d){b|=0;a.tmp.pushing=!0;for(var c=0;c<b;c++)a.particles.array.push(new a.fn.particle(a.particles.color,a.particles.opacity.value,{x:d?d.pos_x:Math.random()*a.canvas.w,y:d?d.pos_y:Math.random()*a.canvas.h}));a.particles.move.enable||a.fn.particlesDraw();a.tmp.pushing=!1};a.fn.modes.removeParticles=function(b){a.particles.array.splice(0,b);a.particles.move.enable||a.fn.particlesDraw()};a.fn.modes.bubbleParticle=function(b){if(a.interactivity.events.onhover.enable&&-1<a.interactivity.events.onhover.mode.indexOf("bubble")){var d=b.x-a.interactivity.mouse.pos_x;var c=b.y-a.interactivity.mouse.pos_y;d=Math.sqrt(d*d+c*c);c=1-d/a.interactivity.modes.bubble.distance;d<=a.interactivity.modes.bubble.distance?0<=c&&"mousemove"===a.interactivity.status&&(a.interactivity.modes.bubble.size!=b.radius&&(a.interactivity.modes.bubble.size>b.radius?(d=b.radius+a.interactivity.modes.bubble.size*c,0<=d&&(b.radius_bubble=d)):(d=b.radius-(b.radius-a.interactivity.modes.bubble.size)*c,b.radius_bubble=0<d?d:0)),a.interactivity.modes.bubble.opacity!=b.opc&&(a.interactivity.modes.bubble.opacity>b.opc?(d=a.interactivity.modes.bubble.opacity*c,d>b.opacity&&d<=a.interactivity.modes.bubble.opacity&&(b.opacity_bubble=d)):(d=b.opacity-(b.opc-a.interactivity.modes.bubble.opacity)*c,d<b.opacity&&d>=a.interactivity.modes.bubble.opacity&&(b.opacity_bubble=d)))):(b.opacity_bubble=b.opacity,b.radius_bubble=b.radius);"mouseleave"===a.interactivity.status&&(b.opacity_bubble=b.opacity,b.radius_bubble=b.radius)}else a.interactivity.events.onclick.enable&&-1<a.interactivity.events.onclick.mode.indexOf("bubble")&&(a.tmp.bubble_clicking&&(d=b.x-a.interactivity.mouse.click_pos_x,c=b.y-a.interactivity.mouse.click_pos_y,d=Math.sqrt(d*d+c*c),c=((new Date).getTime()-a.interactivity.mouse.click_time)/1E3,c>a.interactivity.modes.bubble.duration&&(a.tmp.bubble_duration_end=!0),c>2*a.interactivity.modes.bubble.duration&&(a.tmp.bubble_clicking=!1,a.tmp.bubble_duration_end=!1)),a.tmp.bubble_clicking&&(u(b,d,c,a.interactivity.modes.bubble.size,b.osize,b.radius_bubble,b.radius,"size"),u(b,d,c,a.interactivity.modes.bubble.opacity,b.opc,b.opacity_bubble,b.opacity,"opacity")))};a.fn.modes.repulseParticle=function(b){if(a.interactivity.events.onhover.enable&&-1<a.interactivity.events.onhover.mode.indexOf("repulse")&&"mousemove"===a.interactivity.status){var d=b.x-a.interactivity.mouse.pos_x;var c=b.y-a.interactivity.mouse.pos_y;var e=Math.sqrt(d*d+c*c);d/=e;var f=c/e;c=a.interactivity.modes.repulse.distance;c=Math.min(Math.max(1/c*(-1*Math.pow(e/c,2)+1)*c*100,0),50);a.interactivity.modes.repulse.easing?(e=a.interactivity.modes.repulse.easing/16,d=b.x+(b.x+d*c-b.x)/e,c=b.y+(b.y+f*c-b.y)/e):(d=b.x+d*c,c=b.y+f*c);"bounce"===a.particles.move.out_mode?(0<d-b.radius&&d+b.radius<a.canvas.w&&(b.x=d),0<c-b.radius&&c+b.radius<a.canvas.h&&(b.y=c)):(b.x=d,b.y=c)}else if(a.interactivity.events.onclick.enable&&-1<a.interactivity.events.onclick.mode.indexOf("repulse"))if(a.tmp.repulse_finish||(a.tmp.repulse_count++,a.tmp.repulse_count==a.particles.array.length&&(a.tmp.repulse_finish=!0)),a.tmp.repulse_clicking){c=Math.pow(a.interactivity.modes.repulse.distance/6,3);f=a.interactivity.mouse.click_pos_x-b.x;e=a.interactivity.mouse.click_pos_y-b.y;var g=f*f+e*e;d=-c/g;g<=c&&(c=Math.atan2(e,f),b.vx=d*Math.cos(c),b.vy=d*Math.sin(c),"bounce"===a.particles.move.out_mode&&(c=b.x+b.vx,d=b.y+b.vy,c+b.radius>a.canvas.w?b.vx=-b.vx:0>c-b.radius&&(b.vx=-b.vx),d+b.radius>a.canvas.h?b.vy=-b.vy:0>d-b.radius&&(b.vy=-b.vy)))}else 0==a.tmp.repulse_clicking&&(b.vx=b.vx_i,b.vy=b.vy_i)};a.fn.modes.grabParticle=function(b){if(a.interactivity.events.onhover.enable&&"mousemove"===a.interactivity.status){var d=b.x-a.interactivity.mouse.pos_x,c=b.y-a.interactivity.mouse.pos_y;d=Math.sqrt(d*d+c*c);d<=a.interactivity.modes.grab.distance&&(d=a.interactivity.modes.grab.line_linked.opacity-d/(1/a.interactivity.modes.grab.line_linked.opacity)/a.interactivity.modes.grab.distance,0<d&&(c=b.lineColor,a.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+d+")",a.canvas.ctx.lineWidth=a.particles.line_linked.width,a.canvas.ctx.beginPath(),a.canvas.ctx.moveTo(b.x,b.y),a.canvas.ctx.lineTo(a.interactivity.mouse.pos_x,a.interactivity.mouse.pos_y),a.canvas.ctx.stroke(),a.canvas.ctx.closePath()))}};a.fn.vendors.eventsListeners=function(){a.interactivity.el="window"===a.interactivity.detect_on?window:a.canvas.el;if(a.interactivity.events.onhover.enable||a.interactivity.events.onclick.enable)p.on("mousemove.rsparticles",function(b){a.interactivity.mouse.pos_x=b.pageX-a.offset.left;a.interactivity.mouse.pos_y=b.pageY-a.offset.top;a.interactivity.status="mousemove"}),p.on("mouseleave.rsparticles",function(b){a.interactivity.mouse.pos_x=null;a.interactivity.mouse.pos_y=null;a.interactivity.status="mouseleave"});if(a.interactivity.events.onclick.enable)p.on("click.rsparticles",function(){a.interactivity.mouse.click_pos_x=a.interactivity.mouse.pos_x;a.interactivity.mouse.click_pos_y=a.interactivity.mouse.pos_y;a.interactivity.mouse.click_time=(new Date).getTime();if(a.interactivity.events.onclick.enable)switch(a.interactivity.events.onclick.mode){case "push":a.particles.move.enable?a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb,a.interactivity.mouse):1==a.interactivity.modes.push.particles_nb?a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb,a.interactivity.mouse):1<a.interactivity.modes.push.particles_nb&&a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb);break;case "remove":a.fn.modes.removeParticles(a.interactivity.modes.remove.particles_nb);break;case "bubble":a.tmp.bubble_clicking=!0;break;case "repulse":a.tmp.repulse_clicking=!0,a.tmp.repulse_count=0,a.tmp.repulse_finish=!1,setTimeout(A,1E3*a.interactivity.modes.repulse.duration)}})};a.fn.vendors.densityAutoParticles=function(){if(a.particles.number.density.enable){var b=a.canvas.el.width*a.canvas.el.height/1E3;a.tmp.retina&&(b/=2*a.canvas.pxratio);b=a.particles.array.length-b*a.particles.number.value/a.particles.number.density.value_area;0>b?a.fn.modes.pushParticles(Math.abs(b)):a.fn.modes.removeParticles(b)}};a.fn.vendors.checkOverlap=function(b,d){for(var c=a.particles.array.length,e=0;e<c;e++){var f=a.particles.array[e],g=b.x-f.x,h=b.y-f.y;Math.sqrt(g*g+h*h)<=b.radius+f.radius&&(b.x=d?d.x:Math.random()*a.canvas.w,b.y=d?d.y:Math.random()*a.canvas.h,a.fn.vendors.checkOverlap(b))}};a.fn.vendors.createSvgImg=function(b){b.img.obj=a.cachedSvg[Math.floor(Math.random()*a.cachedSvg.length)];b.img.loaded=!0;a.tmp.count_svg++};a.fn.vendors.destroypJS=function(){cancelAnimationFrame(a.fn.drawAnimFrame);for(var b in a)a.hasOwnProperty(b)&&delete a[b];for(b in z)z.hasOwnProperty(b)&&delete z[b];z=a=null};a.fn.vendors.drawShape=function(a,d,c,e,f,g){var b=f*g;f/=g;f=Math.PI-180*(f-2)/f*Math.PI/180;a.save();a.beginPath();a.translate(d,c);a.moveTo(0,0);for(d=0;d<b;d++)a.lineTo(e,0),a.translate(e,0),a.rotate(f);a.fill();a.restore()};a.fn.vendors.loadImg=function(b,d){a.tmp.source_svg=d;a.fn.vendors.checkBeforeDraw()};a.fn.vendors.draw=function(){"image"===a.particles.shape.type?"svg"===a.tmp.img_type?a.tmp.count_svg>=a.particles.number.value?(a.fn.particlesDraw(),a.particles.move.enable?a.fn.drawAnimFrame=requestAnimationFrame(a.fn.vendors.draw):cancelAnimationFrame(a.fn.drawAnimFrame)):a.tmp.img_error||(a.fn.drawAnimFrame=requestAnimationFrame(a.fn.vendors.draw)):void 0!=a.tmp.img_obj?(a.fn.particlesDraw(),a.particles.move.enable?a.fn.drawAnimFrame=requestAnimationFrame(a.fn.vendors.draw):cancelAnimationFrame(a.fn.drawAnimFrame)):a.tmp.img_error||(a.fn.drawAnimFrame=requestAnimationFrame(a.fn.vendors.draw)):(a.fn.particlesDraw(),a.particles.move.enable?a.fn.drawAnimFrame=requestAnimationFrame(a.fn.vendors.draw):cancelAnimationFrame(a.fn.drawAnimFrame))};a.fn.vendors.checkBeforeDraw=function(){"image"===a.particles.shape.type?"svg"===a.tmp.img_type&&void 0==a.tmp.source_svg?a.tmp.checkAnimFrame=requestAnimationFrame(check):(cancelAnimationFrame(a.tmp.checkAnimFrame),a.tmp.img_error||(a.fn.vendors.init(),a.fn.vendors.draw())):(a.fn.vendors.init(),a.fn.vendors.draw())};a.fn.vendors.init=function(){a.fn.retinaInit();a.fn.canvasInit();a.fn.canvasSize();a.fn.canvasPaint();a.fn.particlesCreate();a.fn.vendors.densityAutoParticles()};a.fn.vendors.start=function(){-1<a.particles.shape.type.indexOf("image")?(a.tmp.img_type="svg",a.fn.vendors.loadImg(a.tmp.img_type,a.particles.shape.image.src)):a.fn.vendors.checkBeforeDraw()};a.cachedSvg=[];var e=0;if("image"===a.particles.shape.type){f=a.particles.color.value;h=a.particles.shape.stroke.color;var g=a.particles.shape.image.src,r=g.length,l=f.length,k=h.length;var m=r*l*k;for(var n=0,q,v;n<r;n++)for(q=0;q<l;q++)for(v=0;v<k;v++)B(g[n],f[q],h[v],a.particles.size.drawSize)}else x()}})();
;