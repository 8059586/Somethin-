AFRAME.registerComponent("ring",{
    init:function(){
        for(var i = 1;i<20;i++){
            var id = "ring"+i
            var posx = (Math.random()*3000+(-1000))
            var posy = (Math.random()*2+(-1))
            var posz = (Math.random()*3000+(-1000))
            var pos = {x:posx,y:posy,z:posz}
            this.createRing(id,pos)
        }
    },
    createRing:function(id,pos){
        var land = document.querySelector("#terrain")
        var ring = document.createElement("a-entity")
        ring.setAttribute("id",id)
        ring.setAttribute("position",pos)
        ring.setAttribute("material","color","yellow")
        ring.setAttribute("geometry",{primitive:"torus",radius:8})
        land.appendChild(ring)
    }
})

AFRAME.registerComponent("bird",{
    init:function(){
        for(var i = 1;i<20;i++){
            var id = "bird"+i
            var posx = (Math.random()*3000+(-1000))
            var posy = (Math.random()*2+(-1))
            var posz = (Math.random()*3000+(-1000))
            var pos = {x:posx,y:posy,z:posz}
            this.createBird(id,pos)
        }
    },
    createBird:function(id,pos){
        var land = document.querySelector("#terrain")
        var bird = document.createElement("a-entity")
        bird.setAttribute("id",id)
        bird.setAttribute("position",pos)
        bird.setAttribute("scale",{x:500,y:500,z:500})
        bird.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");
        bird.setAttribute("animation-mixer", {});
        land.appendChild(bird)
    }
})

