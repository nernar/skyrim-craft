var crossContainer = new GUI.Container();
var pagesContainer = new UI.Container();
var overlay = new GUI.Overlay({
	location: {
		x: GUI.getUnitsInPixels(10),
		y: GUI.getUnitsInPixels(0),
		width: GUI.getUnitsInPixels(50),
		height: GUI.getUnitsInPixels(50),
		gravity: GUI.Gravity.RIGHT | GUI.Gravity.TOP,
	},
	touchable: true,
	elements: {
		but: {
			type: "image",
			x: 0,
			y: 0,
			width: GUI.getUnitsInPixels(50),
			height: GUI.getUnitsInPixels(50),
			clicker: {
				onClick: function () {
					pagesContainer.openAs(startWindow);
				},
			},
			texture: {
				name: "cross_btn.png",
				bitmap: {
					x: 0,
					y: 0,
					width: 68,
					height: 68,
					scale: 9,
				},
			},
		},
	},
});

var startWindow = new UI.StandartWindow({
	standart: {
		inventory: null,
		header: null,
		background: {
			color: android.graphics.Color.parseColor("#1c1c1c"),
			//bitmap: "InvBG1"
		},
	},
	drawing: [
		//{type: "bitmap", x: 70, y: -200, scale: 3.4, bitmap: "cross"}
		{ type: "bitmap", x: 810, y: 330, scale: 1.3, bitmap: "btn_left" },
		{ type: "text", x: 840, y: 350, text: "magic" },
		{ type: "bitmap", x: 810, y: 360, scale: 1.3, bitmap: "btn_up" },
		{ type: "text", x: 840, y: 380, text: "shouts" },
		{ type: "bitmap", x: 810, y: 390, scale: 1.3, bitmap: "btn_right" },
		{ type: "text", x: 840, y: 410, text: "inventory" },
		{ type: "bitmap", x: 810, y: 420, scale: 1.3, bitmap: "btn_down" },
		{ type: "text", x: 840, y: 440, text: "quests" },
	],
	elements: {
		closeButton: { type: "closeButton", x: 142, y: 80, scale: 3.3, bitmap: "btn_cross" },
		magick: {
			type: "button",
			x: 70,
			y: 217,
			bitmap: "btn_left",
			scale: 3.4,
			clicker: {
				onClick: function () {
					pagesContainer.openAs(inventoryWindow);
				},
			},
		},
		inventory: { type: "button", x: 855, y: 217, bitmap: "btn_right", scale: 3.4 },
		shouts: { type: "button", x: 473, y: 12, bitmap: "btn_up", scale: 3.4 },
		quests: { type: "button", x: 473, y: 420, bitmap: "btn_down", scale: 3.4 },
	},
});

var inventoryWindow = new UI.StandartWindow({
	standart: {
		inventory: { standart: true },
		header: { text: "типа инвентарь" },
		background: { standart: true },
	},
});
/*var _window = new GUI.Overlay({
    texture:{
       background:new android.graphics.drawable.ColorDrawable(android.graphics.Color.DKGRAY)
    },
    location: {
        x:0,
        y:0,
        width:GUI.Size.WIDTH,
        height:GUI.Size.HEIGHT
    },
    touchable:true,
    elements:{
        "center":{
            type:"image",
            x:-GUI.getUnitsInPixels(20)+GUI.Size.WIDTH/2-426,
            y:GUI.Size.HEIGHT/2-202,
            texture:{
                name:"cross.png",
                bitmap:{
                    x:18,
                    y:81,
                    width:213,
                    height:101,
                    scale:4
                }
            },
            clicker:{
                onClick:function(){
                    container.open(overlay);
                }
            }
        }
    }
})*/

/*Callback.addCallback("PostLoaded", function(){
	pagesContainer.openAs(startWindow);
});*/

Callback.addCallback("LevelLoaded", function () {
	crossContainer.open(overlay);
});

Callback.addCallback("NativeGuiChanged", function (a) {
	switch (a) {
		case "play_screen - worlds":
			break;
		case "hud_screen":
		case "in_game_play_screen":
			crossContainer.open(overlay);
			break;
		default:
			crossContainer.close();
			break;
	}
});
