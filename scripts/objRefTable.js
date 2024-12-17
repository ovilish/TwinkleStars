const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.LOS,
		C3.Behaviors.solid,
		C3.Plugins.TiledBg,
		C3.Behaviors.Rotate,
		C3.Plugins.Particles,
		C3.Plugins.Audio,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Plugins.Audio.Acts.Play
	];
};
self.C3_JsPropNameTable = [
	{ScrollTo: 0},
	{Platform: 0},
	{BoundToLayout: 0},
	{LineOfSight: 0},
	{Player: 0},
	{Solid: 0},
	{TiledBackground: 0},
	{Stardust: 0},
	{Rotate: 0},
	{Spinny: 0},
	{Sparkle: 0},
	{Meteor: 0},
	{Hotmeteors: 0},
	{Barrier: 0},
	{Audio: 0},
	{Keyboard: 0},
	{Text: 0},
	{Text2: 0},
	{Score: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	Platform: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Stardust: class extends self.ISpriteInstance {},
	Spinny: class extends self.ISpriteInstance {},
	Sparkle: class extends self.IParticlesInstance {},
	Meteor: class extends self.ISpriteInstance {},
	Hotmeteors: class extends self.ISpriteInstance {},
	Barrier: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {}
}