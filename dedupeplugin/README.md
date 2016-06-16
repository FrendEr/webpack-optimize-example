# webpack.optimize.DedupePlugin

> 代码去重

## 原理

* `Webpack` 在编译文件的时候，会为每个文件生成一个 `hash` 值，如下面的代码

```
// https://github.com/webpack/webpack/blob/master/lib/NormalModule.js#L312
NormalModule.prototype.getSourceHash = function() {
  if(!this._source) return "";
  var hash = require("crypto").createHash("md5");
  hash.update(this._source.source());
  return hash.digest("hex");
};
```

所以，不同的文件内容编译出来的 `hash` 值是不一样的。句末空格不会影响文件内容，但是制表符会产生影响。

* `DedupePlugin` 插件在去重的时候，就是通过判断一个 `hash` 值对应的模块是否已经存在，存在则标记为重复

```
// https://github.com/webpack/webpack/blob/master/lib/optimize/DedupePlugin.js#L23
var dupModule = modulesByHash[hash];
if(dupModule) {
	if(dupModule.duplicates) {
		dupModule.duplicates.push(module);
		module.duplicates = dupModule.duplicates;
	} else {
		allDups.push(module.duplicates = dupModule.duplicates = [dupModule, module]);
	}
} else {
	modulesByHash[hash] = module;
}
```
