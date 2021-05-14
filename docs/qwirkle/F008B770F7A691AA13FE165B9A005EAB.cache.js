var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.qwirkle;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.9.0";
var $strongName = 'F008B770F7A691AA13FE165B9A005EAB';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = {3:1}, $intern_1 = {3:1, 9:1}, $intern_2 = {3:1, 5:1, 4:1}, $intern_3 = {3:1, 18:1, 4:1}, $intern_4 = {16:1, 27:1}, $intern_5 = {17:1}, $intern_6 = {3:1, 16:1, 34:1}, $intern_7 = 15525485, $intern_8 = 5.9604644775390625E-8, $intern_9 = 16777216;
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_0(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

$wnd.goog = $wnd.goog || {};
$wnd.goog.global = $wnd.goog.global || $wnd;
bootstrap();
function $equals(this$static, other){
  return maskUndefined(this$static) === maskUndefined(other);
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_0(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other)):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?$equals(this$static, other):!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return $equals(this, other);
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToNative(src_0, jsType){
  checkCriticalType(src_0 == null || src_0 && jsType && src_0 instanceof jsType);
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getEnumConstants(this$static){
  return this$static.enumConstantsFunc && this$static.enumConstantsFunc();
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumConstantsFunc = enumConstantsFunc;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(47, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 47);
function $fillInStackTrace(this$static){
  this$static.writableStackTrace && this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
  return this$static;
}

function $linkBack(this$static, error){
  if (error instanceof Object) {
    try {
      error.__java$exception = this$static;
      if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && $doc.documentMode < 9) {
        return;
      }
      var throwable = this$static;
      Object.defineProperties(error, {cause:{get:function(){
        var cause = throwable.getCause();
        return cause && cause.getBackingJsObject();
      }
      }, suppressed:{get:function(){
        return throwable.getBackingSuppressed();
      }
      }});
    }
     catch (ignored) {
    }
  }
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  $linkBack(this$static, backingJsObject);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(4, 1, {3:1, 4:1});
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.getBackingJsObject = function getBackingJsObject(){
  return this.backingJsObject;
}
;
_.getBackingSuppressed = function getBackingSuppressed(){
  var collected, lastArg, lastArg0;
  return collected = castTo($reduce((lastArg0 = $map(stream((this.suppressedExceptions == null && (this.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_0, 4, 0, 0, 1)) , this.suppressedExceptions)), new Throwable$lambda$0$Type) , of(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 23, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)])) , lastArg0), (lastArg = new ArrayList , lastArg)), 34) , collected.toArray(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, collected.size_1(), 5, 1));
}
;
_.getCause = function getCause(){
  return this.cause_0;
}
;
_.initializeBackingError = function initializeBackingError(){
  $setBackingJsObject(this, fixIE(this.createError($toString(this, this.detailMessage))));
  captureStackTrace(this);
}
;
_.backingJsObject = '__noinit__';
_.writableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 4);
defineClass(38, 4, {3:1, 4:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 38);
function RuntimeException(){
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(5, 38, $intern_2);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 5);
defineClass(40, 5, $intern_2);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 40);
defineClass(76, 40, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 76);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $fillInStackTrace(this);
  this.backingJsObject = e;
  $linkBack(this, e);
  this.detailMessage = e == null?'null':toString_0(e);
  this.e = e;
}

defineClass(29, 76, {29:1, 3:1, 5:1, 4:1}, JavaScriptException);
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 29);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(112, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 112);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e){
  $clinit_Impl();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].$_nullMethod();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 29)?castTo(e, 29).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(87, 112, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 87);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(123, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 123);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(77, 123, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 77);
defineClass(124, 123, {});
_.collect = function collect_0(error){
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 124);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(78, 124, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 78);
function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && (typeof value_0 === 'object' || typeof value_0 == 'function');
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function toJava(e){
  var javaException;
  if (instanceOf(e, 4)) {
    return e;
  }
  javaException = e && e.__java$exception;
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function init(){
  var stapel, spielfeldAnzeige, spielfeld, spielfeldDarstellung, vorratsAnzeige, vorrat;
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  stapel = new Nachzugstapel;
  spielfeldAnzeige = castToNative(($clinit_DomGlobal() , document_0).getElementById('spielfeld'), $wnd.SVGSVGElement);
  spielfeld = new Spielfeld;
  $set_0(spielfeld, 0, 0, new Qwirkle$Stein(($clinit_Qwirkle$Farbe() , red), ($clinit_Qwirkle$Form() , circle)));
  $set_0(spielfeld, 0, 1, new Qwirkle$Stein(red, square));
  $set_0(spielfeld, 1, 0, new Qwirkle$Stein(green, circle));
  spielfeldDarstellung = new SpielfeldDarstellung(spielfeldAnzeige, spielfeld);
  $zeigeAn(spielfeldDarstellung);
  vorratsAnzeige = castToNative(document_0.getElementById('vorrat'), $wnd.SVGSVGElement);
  vorrat = new Vorrat(vorratsAnzeige, stapel);
  $fülleAuf(vorrat);
  $starteZug(vorrat, spielfeldDarstellung);
}

function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_0(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_0('ie9', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  this.cause_0 = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(18, 4, $intern_3);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 18);
defineClass(8, 18, $intern_3);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 8);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_0('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4):null);
}

defineClass(61, 8, $intern_3, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 61);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clinit_DomGlobal(){
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.goog.global.document;
}

var document_0;
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(30, 5, $intern_2, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 30);
function ArrayIndexOutOfBoundsException(msg){
  IndexOutOfBoundsException_0.call(this, msg);
}

defineClass(56, 30, $intern_2, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 56);
function ArrayStoreException(){
  RuntimeException.call(this);
}

function ArrayStoreException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(51, 5, $intern_2, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 51);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

function $compareTo(this$static, b){
  return compare((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function compare(x_0, y_0){
  $clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  $clinit_Boolean();
  return instanceOfString(this$static)?$compareTo_2(this$static, (checkCriticalType(other == null || instanceOfString(other)) , other)):instanceOfDouble(this$static)?$compareTo_0(this$static, (checkCriticalType(other == null || instanceOfDouble(other)) , other)):instanceOfBoolean(this$static)?$compareTo(this$static, (checkCriticalType(other == null || instanceOfBoolean(other)) , other)):this$static.compareTo(other);
}

booleanCastMap = {3:1, 71:1, 20:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 71);
function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(73, 5, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 73);
defineClass(122, 1, $intern_0);
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 122);
function $compareTo_0(this$static, b){
  return compare_0((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function compare_0(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return x_0 == 0?compare_0(1 / x_0, 1 / y_0):0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

doubleCastMap = {3:1, 20:1, 72:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 72);
function $compareTo_1(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(12, 1, {3:1, 20:1, 12:1});
_.compareTo = function compareTo(other){
  return $compareTo_1(this, castTo(other, 12));
}
;
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode(this);
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 12);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(39, 5, $intern_2, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 39);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(){
  RuntimeException_0.call(this, "Stream already terminated, can't be modified or used");
}

defineClass(49, 5, $intern_2, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 49);
defineClass(164, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(50, 40, $intern_2, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 50);
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $compareTo_2(this$static, other){
  var a, b;
  a = (checkCriticalNotNull(this$static) , this$static);
  b = (checkCriticalNotNull(other) , other);
  return a == b?0:a < b?-1:1;
}

function $equals_0(this$static, other){
  return checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other);
}

stringCastMap = {3:1, 66:1, 20:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(79, 30, $intern_2, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 79);
function arraycopy(src_0, srcOfs, dest, destOfs, len){
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  checkCriticalNotNull_0(src_0, 'src');
  checkCriticalNotNull_0(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkCriticalArrayType_0((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkCriticalArrayType_0((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkCriticalArrayType_0((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if ((srcComp.modifiers & 1) == 0 && srcType != destType) {
    srcArray = src_0;
    destArray = dest;
    if (src_0 === dest && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        destArray[destEnd] = srcArray[--srcOfs];
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        destArray[destOfs++] = srcArray[srcOfs++];
      }
    }
  }
   else 
    len > 0 && copy(src_0, srcOfs, dest, destOfs, len);
}

defineClass(168, 1, {});
function Throwable$lambda$0$Type(){
}

defineClass(62, 1, {}, Throwable$lambda$0$Type);
var Ljava_lang_Throwable$lambda$0$Type_2_classLit = createForClass('java.lang', 'Throwable/lambda$0$Type', 62);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(35, 5, $intern_2, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 35);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

defineClass(125, 1, {16:1});
_.add_0 = function add_0(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toArray = function toArray(a){
  var i, it, result, size_0;
  size_0 = this.size_1();
  a.length < size_0 && (a = stampJavaTypeInfo_0(new Array(size_0), a));
  result = a;
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(result, i, it.next_0());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 125);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = instanceOfString(key)?key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_0(this$static.stringMap, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(128, 1, {60:1});
_.equals_0 = function equals_1(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 37)) {
    return false;
  }
  otherMap = castTo(obj, 60);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.hashCodeMap.size_0 + otherMap.stringMap.size_0) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(otherMap)).this$01); entry$iterator.hasNext;) {
    entry = $next(entry$iterator);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_2(){
  return hashCode_7(new AbstractHashMap$EntrySet(this));
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 128);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0){
  return $containsValue_0(value_0, this$static.stringMap) || $containsValue_0(value_0, this$static.hashCodeMap);
}

function $containsValue_0(value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_0(), 17);
    if ($equals_1(value_0, entry.getValue())) {
      return true;
    }
  }
  return false;
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_1(this$static.stringMap, key);
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $remove(this$static, key){
  return $remove_3(this$static.hashCodeMap, key);
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(89, 128, {60:1});
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 89);
defineClass(127, 125, $intern_4);
_.equals_0 = function equals_2(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 27)) {
    return false;
  }
  other = castTo(o, 27);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_3(){
  return hashCode_7(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 127);
function $contains(this$static, o){
  if (instanceOf(o, 17)) {
    return $containsEntry(this$static.this$01, castTo(o, 17));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(10, 127, $intern_4, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_0(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_1(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 10);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = castTo(this$static.current.next_0(), 17);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function $remove_0(this$static){
  checkCriticalState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_0();
  this$static.last = null;
  this$static.hasNext = $computeHasNext(this$static);
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

defineClass(11, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_0 = function next(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.hasNext;
}
;
_.remove_0 = function remove(){
  $remove_0(this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 11);
function $indexOf(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (equals_7(toFind, this$static.get_0(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(126, 125, {16:1, 34:1});
_.add_1 = function add_1(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_2(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_3(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 34)) {
    return false;
  }
  other = castTo(o, 34);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_4(){
  return hashCode_8(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.remove_1 = function remove_0(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 126);
function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

defineClass(41, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_0(){
  return this.i < this.this$01.size_1();
}
;
_.next_0 = function next_0(){
  return checkCriticalElement(this.i < this.this$01.size_1()) , this.this$01.get_0(this.last = this.i++);
}
;
_.remove_0 = function remove_1(){
  checkCriticalState(this.last != -1);
  this.this$01.remove_1(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 41);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(31, 127, $intern_4, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_2(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_2(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 31);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(25, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_1(){
  return this.val$outerIter2.hasNext;
}
;
_.next_0 = function next_1(){
  var entry;
  return entry = $next(this.val$outerIter2) , entry.getKey();
}
;
_.remove_0 = function remove_2(){
  $remove_0(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 25);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(42, 125, {16:1}, AbstractMap$2);
_.contains_0 = function contains_2(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.iterator = function iterator_3(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$2$1(outerIter);
}
;
_.size_1 = function size_3(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 42);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(36, 1, {}, AbstractMap$2$1);
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext;
}
;
_.next_0 = function next_2(){
  var entry;
  return entry = $next(this.val$outerIter2) , entry.getValue();
}
;
_.remove_0 = function remove_3(){
  $remove_0(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 36);
defineClass(83, 1, $intern_5);
_.equals_0 = function equals_4(other){
  var entry;
  if (!instanceOf(other, 17)) {
    return false;
  }
  entry = castTo(other, 17);
  return equals_7(this.key, entry.getKey()) && equals_7(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_5(){
  return hashCode_9(this.key) ^ hashCode_9(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 83);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(84, 83, $intern_5, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 84);
defineClass(129, 1, $intern_5);
_.equals_0 = function equals_5(other){
  var entry;
  if (!instanceOf(other, 17)) {
    return false;
  }
  entry = castTo(other, 17);
  return equals_7(this.val$entry2.value[0], entry.getKey()) && equals_7($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_6(){
  return hashCode_9(this.val$entry2.value[0]) ^ hashCode_9($getValue(this));
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 129);
function $add(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $get(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_7(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_1(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0);
  return previous;
}

function $remove_2(this$static, o){
  var i;
  i = $indexOf_0(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  removeFrom(this$static.array, i);
  return true;
}

function $set(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function $sort(this$static, c){
  sort_0(this$static.array, this$static.array.length, c);
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
}

defineClass(28, 126, $intern_6, ArrayList);
_.add_1 = function add_3(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add_0 = function add_4(o){
  return $add(this, o);
}
;
_.contains_0 = function contains_3(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.get_0 = function get_0(index_0){
  return $get(this, index_0);
}
;
_.iterator = function iterator_4(){
  return new ArrayList$1(this);
}
;
_.remove_1 = function remove_4(index_0){
  return $remove_1(this, index_0);
}
;
_.size_1 = function size_4(){
  return this.array.length;
}
;
_.toArray = function toArray_0(out){
  var i, size_0;
  size_0 = this.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_0(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 28);
function $next_0(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(53, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_3(){
  return this.i < this.this$01.array.length;
}
;
_.next_0 = function next_3(){
  return $next_0(this);
}
;
_.remove_0 = function remove_5(){
  checkCriticalState(this.last != -1);
  $remove_1(this.this$01, this.i = this.last);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 53);
function insertionSort(array, low, high, comp){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      setCheck(array, j, array[j - 1]);
      setCheck(array, j - 1, t);
    }
  }
}

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(src_0[srcLow], src_0[topIdx]) <= 0?setCheck(dest, destLow++, src_0[srcLow++]):setCheck(dest, destLow++, src_0[topIdx++]);
  }
}

function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp;
  comp = ($clinit_Comparators() , !comp?INTERNAL_NATURAL_ORDER:comp);
  temp = x_0.slice(fromIndex, toIndex);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex, comp);
}

function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high, comp);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      setCheck(array, low++, temp[tempLow++]);
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
}

function sort_0(x_0, toIndex, c){
  checkCriticalArrayBounds_0(toIndex, x_0.length);
  mergeSort(x_0, 0, toIndex, c);
}

function spliterator_0(array, endExclusive){
  return checkCriticalArrayBounds(endExclusive, array.length) , new Spliterators$ArraySpliterator(array, endExclusive);
}

function stream(array){
  return new StreamImpl(null, spliterator_0(array, array.length));
}

function $toArray(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_0(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

defineClass(52, 126, $intern_6, Arrays$ArrayList);
_.contains_0 = function contains_4(o){
  return $indexOf(this, o) != -1;
}
;
_.get_0 = function get_1(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
_.toArray = function toArray_1(out){
  return $toArray(this, out);
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 52);
function hashCode_7(collection){
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_8(list){
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function shuffle(list, rnd){
  var i;
  for (i = list.array.length - 1; i >= 1; i--) {
    swapImpl(list, i, $nextInt(rnd, i + 1));
  }
}

function swapImpl(list, i, j){
  var t;
  t = (checkCriticalElementIndex(i, list.array.length) , list.array[i]);
  $set(list, i, (checkCriticalElementIndex(j, list.array.length) , list.array[j]));
  checkCriticalElementIndex(j, list.array.length);
  list.array[j] = t;
}

function $clinit_Collections$RandomHolder(){
  $clinit_Collections$RandomHolder = emptyMethod;
  rnd_0 = new Random;
}

var rnd_0;
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  INTERNAL_NATURAL_ORDER = new Comparators$NaturalOrderComparator;
}

var INTERNAL_NATURAL_ORDER;
function $compare(a, b){
  return checkCriticalNotNull(a) , compareTo_Ljava_lang_Object__I__devirtual$(a, (checkCriticalNotNull(b) , b));
}

function Comparators$NaturalOrderComparator(){
}

defineClass(90, 1, $intern_0, Comparators$NaturalOrderComparator);
_.compare = function compare_1(a, b){
  return $compare(castTo(a, 20), castTo(b, 20));
}
;
_.equals_0 = function equals_6(other){
  return this === other;
}
;
var Ljava_util_Comparators$NaturalOrderComparator_2_classLit = createForClass('java.util', 'Comparators/NaturalOrderComparator', 90);
function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

function recordLastKnownStructure(host, iterator){
  iterator.$modCount = host.$modCount;
}

function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(106, 5, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 106);
defineClass(130, 127, $intern_4);
var Ljava_util_EnumSet_2_classLit = createForClass('java.util', 'EnumSet', 130);
function $add_0(this$static, e){
  var ordinal;
  checkCriticalNotNull(e);
  ordinal = e.ordinal;
  if (!this$static.set_0[ordinal]) {
    setCheck(this$static.set_0, ordinal, e);
    ++this$static.size_0;
    return true;
  }
  return false;
}

function $containsEnum(this$static, e){
  return !!e && this$static.set_0[e.ordinal] == e;
}

function EnumSet$EnumSetImpl(all, set_0){
  this.all = all;
  this.set_0 = set_0;
  this.size_0 = 0;
}

defineClass(58, 130, $intern_4, EnumSet$EnumSetImpl);
_.add_0 = function add_5(e){
  return $add_0(this, castTo(e, 12));
}
;
_.contains_0 = function contains_5(o){
  return instanceOf(o, 12) && $containsEnum(this, castTo(o, 12));
}
;
_.iterator = function iterator_5(){
  return new EnumSet$EnumSetImpl$IteratorImpl(this);
}
;
_.size_1 = function size_6(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_EnumSet$EnumSetImpl_2_classLit = createForClass('java.util', 'EnumSet/EnumSetImpl', 58);
function $findNext(this$static){
  var c;
  ++this$static.i;
  for (c = this$static.this$11.all.length; this$static.i < c; ++this$static.i) {
    if (this$static.this$11.set_0[this$static.i]) {
      return;
    }
  }
}

function EnumSet$EnumSetImpl$IteratorImpl(this$1){
  this.this$11 = this$1;
  $findNext(this);
}

defineClass(108, 1, {}, EnumSet$EnumSetImpl$IteratorImpl);
_.next_0 = function next_4(){
  return checkCriticalElement(this.i < this.this$11.all.length) , this.last = this.i , $findNext(this) , this.this$11.set_0[this.last];
}
;
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$11.all.length;
}
;
_.remove_0 = function remove_6(){
  checkCriticalState(this.last != -1);
  setCheck(this.this$11.set_0, this.last, null);
  --this.this$11.size_0;
  this.last = -1;
}
;
_.i = -1;
_.last = -1;
var Ljava_util_EnumSet$EnumSetImpl$IteratorImpl_2_classLit = createForClass('java.util', 'EnumSet/EnumSetImpl/IteratorImpl', 108);
function $equals_1(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  this.hashCodeMap = new InternalHashCodeMap(this);
  this.stringMap = new InternalStringMap(this);
  structureChanged(this);
}

defineClass(37, 89, {3:1, 37:1, 60:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 37);
function $add_1(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(107, 127, {3:1, 16:1, 27:1}, HashSet);
_.add_0 = function add_6(o){
  return $add_1(this, o);
}
;
_.contains_0 = function contains_6(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_7(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 107);
function $findEntryInChain(key, chain){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = chain , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_3(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_1(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete(this$static.backingMap, hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(91, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_7(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 91);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(54, 1, {}, InternalHashCodeMap$1);
_.next_0 = function next_5(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_5(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove_0 = function remove_7(){
  $remove_3(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 54);
function $delete(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $delete_0(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_1(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_0(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_4(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    $delete_0(this$static.backingMap, key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(92, 1, {}, InternalStringMap);
_.iterator = function iterator_8(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 92);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(55, 1, {}, InternalStringMap$1);
_.next_0 = function next_6(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_6(){
  return !this.current.done;
}
;
_.remove_0 = function remove_8(){
  $remove_4(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 55);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_0(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(93, 129, $intern_5, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_0(){
  return $getValue(this);
}
;
_.setValue = function setValue_0(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 93);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(97, 5, $intern_2, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 97);
function equals_7(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_9(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $clinit_Random(){
  $clinit_Random = emptyMethod;
  var i, i0, twoToTheXMinus24Tmp, twoToTheXMinus48Tmp;
  twoToTheXMinus24 = initUnidimensionalArray(D_classLit, $intern_0, 110, 25, 15, 1);
  twoToTheXMinus48 = initUnidimensionalArray(D_classLit, $intern_0, 110, 33, 15, 1);
  twoToTheXMinus48Tmp = 1.52587890625E-5;
  for (i0 = 32; i0 >= 0; i0--) {
    twoToTheXMinus48[i0] = twoToTheXMinus48Tmp;
    twoToTheXMinus48Tmp *= 0.5;
  }
  twoToTheXMinus24Tmp = 1;
  for (i = 24; i >= 0; i--) {
    twoToTheXMinus24[i] = twoToTheXMinus24Tmp;
    twoToTheXMinus24Tmp *= 0.5;
  }
}

function $nextInt(this$static, n){
  var bits, val;
  checkCriticalArgument(n > 0);
  if ((n & -n) == n) {
    return round_int(n * $nextInternal(this$static) * 4.6566128730773926E-10);
  }
  do {
    bits = $nextInternal(this$static);
    val = bits % n;
  }
   while (bits - val + (n - 1) < 0);
  return round_int(val);
}

function $nextInternal(this$static){
  var carry, dval, h, hi, l, lo;
  hi = this$static.seedhi * $intern_7 + this$static.seedlo * 1502;
  lo = this$static.seedlo * $intern_7 + 11;
  carry = $wnd.Math.floor(lo * $intern_8);
  hi += carry;
  lo -= carry * $intern_9;
  hi %= $intern_9;
  this$static.seedhi = hi;
  this$static.seedlo = lo;
  h = this$static.seedhi * 128;
  l = $wnd.Math.floor(this$static.seedlo * twoToTheXMinus48[31]);
  dval = h + l;
  dval >= 2147483648 && (dval -= 4294967296);
  return dval;
}

function Random(){
  $clinit_Random();
  var hi, lo, seed;
  seed = uniqueSeed++ + Date.now();
  hi = round_int($wnd.Math.floor(seed * $intern_8)) & 16777215;
  lo = round_int(seed - hi * $intern_9);
  this.seedhi = hi ^ 1502;
  this.seedlo = lo ^ $intern_7;
}

defineClass(88, 1, {}, Random);
_.seedhi = 0;
_.seedlo = 0;
var twoToTheXMinus24, twoToTheXMinus48, uniqueSeed = 0;
var Ljava_util_Random_2_classLit = createForClass('java.util', 'Random', 88);
function $forEachRemaining(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

function checkCriticalArrayBounds(end, length_0){
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

defineClass(99, 1, {});
_.forEachRemaining = function forEachRemaining(consumer){
  $forEachRemaining(this, consumer);
}
;
_.characteristics_0 = function characteristics_0(){
  return this.characteristics;
}
;
_.estimateSize = function estimateSize(){
  return this.sizeEstimate;
}
;
_.characteristics = 0;
_.sizeEstimate = 0;
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 99);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(100, 99, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 100);
function $forEachRemaining_0(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
  }
}

function $tryAdvance(this$static, consumer){
  checkCriticalNotNull(consumer);
  if (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
    return true;
  }
  return false;
}

defineClass(85, 1, {});
_.forEachRemaining = function forEachRemaining_0(consumer){
  $forEachRemaining(this, consumer);
}
;
_.characteristics_0 = function characteristics_1(){
  return this.characteristics;
}
;
_.estimateSize = function estimateSize_0(){
  return this.limit - this.index_0;
}
;
_.characteristics = 0;
_.index_0 = 0;
_.limit = 0;
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 85);
function $consume(this$static, consumer, index_0){
  consumer.accept(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(86, 85, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_1(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.tryAdvance = function tryAdvance(consumer){
  return $tryAdvance(this, consumer);
}
;
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 86);
function of(supplier, accumulator, combiner, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl;
}

function $clinit_Collector$Characteristics(){
  $clinit_Collector$Characteristics = emptyMethod;
  CONCURRENT = new Collector$Characteristics('CONCURRENT', 0);
  IDENTITY_FINISH = new Collector$Characteristics('IDENTITY_FINISH', 1);
  UNORDERED = new Collector$Characteristics('UNORDERED', 2);
}

function Collector$Characteristics(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 23, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(23, 12, {3:1, 20:1, 12:1, 23:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 23, values);
function CollectorImpl(){
}

defineClass(109, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 109);
function Collectors$20methodref$add$Type(){
}

defineClass(64, 1, {}, Collectors$20methodref$add$Type);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 64);
function Collectors$21methodref$ctor$Type(){
}

defineClass(63, 1, {}, Collectors$21methodref$ctor$Type);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 63);
function Collectors$lambda$42$Type(){
}

defineClass(65, 1, {}, Collectors$lambda$42$Type);
var Ljava_util_stream_Collectors$lambda$42$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$42$Type', 65);
function $terminate(this$static){
  if (!this$static.root_0) {
    $throwIfTerminated(this$static);
    this$static.terminated = true;
  }
   else {
    $terminate(this$static.root_0);
  }
}

function $throwIfTerminated(this$static){
  if (this$static.root_0) {
    $throwIfTerminated(this$static.root_0);
  }
   else if (this$static.terminated) {
    throw toJs(new IllegalStateException_0);
  }
}

function TerminatableStream(previous){
  if (!previous) {
    this.root_0 = null;
    new ArrayList;
  }
   else {
    this.root_0 = previous;
  }
}

defineClass(98, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 98);
function $map(this$static, mapper){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$MapToObjSpliterator(mapper, this$static.spliterator));
}

function $reduce(this$static, identity){
  var consumer;
  $terminate(this$static);
  consumer = new StreamImpl$ValueConsumer;
  consumer.value_0 = identity;
  this$static.spliterator.forEachRemaining(new StreamImpl$lambda$5$Type(consumer));
  return consumer.value_0;
}

function StreamImpl(prev, spliterator){
  TerminatableStream.call(this, prev);
  this.spliterator = spliterator;
}

function lambda$4(a_1, t_2){
  castTo(a_1, 16).add_0(t_2);
  return a_1;
}

function lambda$5(consumer_0, item_2){
  $accept(consumer_0, lambda$4(consumer_0.value_0, item_2));
}

defineClass(57, 98, {}, StreamImpl);
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 57);
function StreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.original = original;
}

defineClass(101, 100, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_0(action){
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(action));
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 101);
function StreamImpl$MapToObjSpliterator$lambda$0$Type(action_1){
  this.action_1 = action_1;
}

defineClass(103, 1, {}, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept = function accept(arg0){
  this.action_1.accept(castTo(arg0, 4).backingJsObject);
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 103);
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(102, 1, {}, StreamImpl$ValueConsumer);
_.accept = function accept_0(value_0){
  $accept(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 102);
function StreamImpl$lambda$5$Type(consumer_0){
  this.consumer_0 = consumer_0;
}

defineClass(104, 1, {}, StreamImpl$lambda$5$Type);
_.accept = function accept_1(arg0){
  lambda$5(this.consumer_0, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 104);
function copy(src_0, srcOfs, dest, destOfs, len){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = dest;
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = src_0.slice(batchStart, batchEnd);
    spliceArgs.splice(0, 0, destOfs, len);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

function createFrom(array, length_0){
  return stampJavaTypeInfo_0(new Array(length_0), array);
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function removeFrom(array, index_0){
  array.splice(index_0, 1);
}

defineClass(166, 1, {});
function stampJavaTypeInfo_0(array, referenceType){
  return getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array) , array;
}

function checkCriticalArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException);
  }
}

function checkCriticalArrayBounds_0(end, length_0){
  if (0 > end) {
    throw toJs(new IllegalArgumentException_0('fromIndex: 0 > toIndex: ' + end));
  }
  if (end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalArrayType_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new ArrayStoreException_0(errorMessage));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_0(errorMessage));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

defineClass(163, 1, {});
function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (checkCriticalStringElementIndex(i + 3, str.length) , str.charCodeAt(i + 3) + (checkCriticalStringElementIndex(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (checkCriticalStringElementIndex(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (checkCriticalStringElementIndex(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (result != null) {
    return round_int((checkCriticalNotNull(result) , result));
  }
  result = back_0[key];
  hashCode = result == null?compute(str):round_int((checkCriticalNotNull(result) , result));
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count == 256) {
    back_0 = front;
    front = new Object_0;
    count = 0;
  }
  ++count;
}

var back_0, count = 0, front;
defineClass(789, 1, {});
function $add_2(this$static, position){
  var x_0, y_0;
  x_0 = position._x;
  y_0 = position._y;
  this$static._x1 = $wnd.Math.min(this$static._x1, x_0);
  this$static._y1 = $wnd.Math.min(this$static._y1, y_0);
  this$static._x2 = $wnd.Math.max(this$static._x2, x_0);
  this$static._y2 = $wnd.Math.max(this$static._y2, y_0);
  $add_1(this$static._positionen, position);
}

function $enthält(this$static, position){
  return $contains_0(this$static._positionen, position);
}

function $nachbarBesetztIn(this$static, spielfeld){
  var entry, inBereich, inBereich$iterator, nachbar, nachbar$iterator, outerIter;
  for (inBereich$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static._positionen.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); inBereich$iterator.val$outerIter2.hasNext;) {
    inBereich = (entry = $next(inBereich$iterator.val$outerIter2) , castTo(entry.getKey(), 6));
    for (nachbar$iterator = new AbstractList$IteratorImpl(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_client_Position_2_classLit, 1), $intern_0, 6, 0, [new Position_0(inBereich._x, inBereich._y - 1), new Position_0(inBereich._x, inBereich._y + 1), new Position_0(inBereich._x - 1, inBereich._y), new Position_0(inBereich._x + 1, inBereich._y)]))); nachbar$iterator.i < nachbar$iterator.this$01.size_1();) {
      nachbar = (checkCriticalElement(nachbar$iterator.i < nachbar$iterator.this$01.size_1()) , castTo(nachbar$iterator.this$01.get_0(nachbar$iterator.last = nachbar$iterator.i++), 6));
      if ($contains_0(this$static._positionen, nachbar)) {
        continue;
      }
      if ($get_1(spielfeld, nachbar._x, nachbar._y)) {
        return true;
      }
    }
  }
  return false;
}

function Bereich(x_0, y_0){
  this._positionen = new HashSet;
  this._x1 = x_0;
  this._y1 = y_0;
  this._x2 = x_0;
  this._y2 = y_0;
  $add_1(this._positionen, new Position_0(x_0, y_0));
}

defineClass(44, 1, {}, Bereich);
_.iterator = function iterator_9(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this._positionen.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_._x1 = 0;
_._x2 = 0;
_._y1 = 0;
_._y2 = 0;
var Lqwirkle_client_Bereich_2_classLit = createForClass('qwirkle.client', 'Bereich', 44);
function Position_0(x_0, y_0){
  this._x = x_0;
  this._y = y_0;
}

defineClass(6, 1, {6:1}, Position_0);
_.equals_0 = function equals_8(obj){
  var other;
  if (this === obj)
    return true;
  if (obj == null)
    return false;
  if (Lqwirkle_client_Position_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj))
    return false;
  other = castTo(obj, 6);
  if (this._x != other._x)
    return false;
  if (this._y != other._y)
    return false;
  return true;
}
;
_.hashCode_0 = function hashCode_10(){
  var result;
  result = 1;
  result = 31 * result + this._x;
  result = 31 * result + this._y;
  return result;
}
;
_._x = 0;
_._y = 0;
var Lqwirkle_client_Position_2_classLit = createForClass('qwirkle.client', 'Position', 6);
function positioniereBild(svg, bild, x_0, y_0){
  var tx;
  tx = svg.createSVGTransform();
  tx.setTranslate(x_0, y_0);
  bild.transform.baseVal.initialize(tx);
}

function $berechneSpielfeldPosition(this$static, clientX, clientY){
  var p, x_0, y_0, point;
  p = (point = this$static._svg.createSVGPoint() , point.x = clientX , point.y = clientY , point).matrixTransform(this$static._tx);
  x_0 = roundToRaster(round_int(p.x));
  y_0 = roundToRaster(round_int(p.y));
  return new Position_0(x_0, y_0);
}

function $fügeEin(this$static, x_0, y_0, stein){
  $set_0(this$static._spielfeld, x_0, y_0, stein);
  return $zeigeStein(this$static, x_0, y_0, stein);
}

function $zeigeAn(this$static){
  var height, stein, width_0, x_0, xMin, y_0, yMin;
  xMin = this$static._spielfeld._xMin;
  yMin = this$static._spielfeld._yMin;
  width_0 = this$static._spielfeld._width;
  height = this$static._spielfeld._height;
  for (x_0 = 0; x_0 < width_0; x_0++) {
    for (y_0 = 0; y_0 < height; y_0++) {
      stein = $get_1(this$static._spielfeld, xMin + x_0, yMin + y_0);
      if (!stein) {
        continue;
      }
      $zeigeStein(this$static, x_0, y_0, stein);
    }
  }
}

function $zeigeStein(this$static, x_0, y_0, stein){
  var darstellung;
  darstellung = new SteinDarstellung(this$static._svg, stein);
  $positioniere(darstellung, this$static._xOffset + x_0 * 100, this$static._yOffset + y_0 * 100);
  darstellung._svg.appendChild(darstellung._bild);
  return darstellung;
}

function SpielfeldDarstellung(svg, spielfeld){
  this._svg = svg;
  this._spielfeld = spielfeld;
  this._xOffset = (this._svg.clientWidth / 2 | 0) - 50;
  this._yOffset = (this._svg.clientHeight / 2 | 0) - 50;
  this._tx = this._svg.getScreenCTM().inverse().translate(-this._xOffset, -this._yOffset);
}

function roundToRaster(value_0){
  return value_0 >= 0?(value_0 + 50) / 100 | 0:(value_0 - 50) / 100 | 0;
}

defineClass(69, 1, {}, SpielfeldDarstellung);
_._xOffset = 0;
_._yOffset = 0;
var Lqwirkle_client_SpielfeldDarstellung_2_classLit = createForClass('qwirkle.client', 'SpielfeldDarstellung', 69);
function $erzeugeBild(this$static){
  var g;
  g = castToNative(($clinit_DomGlobal() , document_0).createElementNS('http://www.w3.org/2000/svg', 'g'), $wnd.SVGGElement);
  switch (this$static._stein.form_0.ordinal) {
    case 0:
      g.innerHTML = '<rect class="tile" width="96" height="96" x="2" y="2" ry="3.6773801" rx="3.6773801" />\n<circle class="circle icon" cx="50" cy="50" r="33" />\n';
      break;
    case 4:
      g.innerHTML = '<rect class="tile" width="96" height="96" x="2" y="2" ry="3.6773801" rx="3.6773801" />\n<path class="cross icon" d="M 21.963695,78.155899 C 39.526153,95.724298 49.979405,58.1379 49.979405,58.1379 c 0,0 9.948885,38.090944 28.01571,20.017999 C 96.061942,60.082953 57.983894,50.1307 57.983894,50.1307 c 0,0 38.500723,-9.315711 20.011221,-28.02519 -18.489501,-18.7094883 -28.01571,20.017999 -28.01571,20.017999 0,0 -9.631968,-38.4079622 -28.01571,-20.017999 -18.3837416,18.389962 20.011222,28.02519 20.011222,28.02519 0,0 -37.57368,10.456799 -20.011222,28.025199 z"/>\n';
      break;
    case 5:
      g.innerHTML = '<rect class="tile" width="96" height="96" x="2" y="2" ry="3.6773801" rx="3.6773801" />\n<path class="diamond icon" d="m 49.989114,11.998163 c -0.996267,0 -37.19392,37.579363 -37.19392,37.579363 l 37.19392,37.579362 37.193919,-37.579362 z" />\n';
      break;
    case 3:
      g.innerHTML = '<rect class="tile" width="96" height="96" x="2" y="2" ry="3.6773801" rx="3.6773801" />\n<path class="spike icon" d="M 113.43171,-13.559393 100.75936,5.8642659 113.55939,25.928944 94.135735,13.256602 74.071056,26.056632 86.743399,6.6329732 73.943368,-13.431705 93.367027,-0.75936255 Z" transform="matrix(1.8230645,0,0,1.8176604,-120.91481,38.639104)" />\n';
      break;
    case 1:
      g.innerHTML = '<rect class="tile" width="96" height="96" x="2" y="2" ry="3.6773801" rx="3.6773801" />\n<rect class="square icon" width="56" height="56" x="22" y="22" />\n';
      break;
    case 2:
      g.innerHTML = '<rect class="tile" width="96" height="96" x="2" y="2" ry="3.6773801" rx="3.6773801" />\n<path class="star icon" d="m 47.489846,237.05051 -7.335371,10.98093 11.545767,6.40966 -13.158765,1.11147 2.187395,13.0232 -9.073341,-9.59494 -8.81813,9.83001 1.844494,-13.07618 -13.183424,-0.76538 11.373387,-6.71078 -7.621329,-10.78442 12.337887,4.70797 3.679781,-12.68257 4.011708,12.58152 z" transform="matrix(1.6758019,0,0,1.5098984,-2.8532488,-327.23319)" />\n';
  }
  g.className.baseVal = $name(this$static._stein.farbe);
  return g;
}

function $lambda$0(this$static, aktion_1, evt_1){
  $start(new Verschiebung(this$static, aktion_1), castToNative(evt_1, $wnd.MouseEvent));
}

function $positioniere(this$static, x_0, y_0){
  this$static._x = x_0;
  positioniereBild(this$static._svg, this$static._bild, x_0, y_0);
}

function $verstecke(this$static){
  this$static._svg.removeChild(this$static._bild);
}

function $zeigeAn_0(this$static){
  this$static._svg.appendChild(this$static._bild);
}

function SteinDarstellung(svg, stein){
  this._svg = svg;
  this._stein = stein;
  this._bild = $erzeugeBild(this);
}

defineClass(21, 1, {21:1}, SteinDarstellung);
_._x = 0;
var Lqwirkle_client_SteinDarstellung_2_classLit = createForClass('qwirkle.client', 'SteinDarstellung', 21);
function SteinDarstellung$lambda$0$Type($$outer_0, aktion_1){
  this.$$outer_0 = $$outer_0;
  this.aktion_1 = aktion_1;
}

defineClass(43, 1, {}, SteinDarstellung$lambda$0$Type);
_.handleEvent = function handleEvent(arg0){
  $lambda$0(this.$$outer_0, this.aktion_1, arg0);
}
;
var Lqwirkle_client_SteinDarstellung$lambda$0$Type_2_classLit = createForClass('qwirkle.client', 'SteinDarstellung/lambda$0$Type', 43);
function $abbrechen(this$static){
  !!this$static._beiMausverschiebung && ($clinit_DomGlobal() , document_0).removeEventListener('mousemove', this$static._beiMausverschiebung);
  !!this$static._beiKnopfLoslassen && ($clinit_DomGlobal() , document_0).removeEventListener('mouseup', this$static._beiKnopfLoslassen);
  if (this$static._beweglichesBild != null) {
    this$static._beweglichesBild.parentNode.removeChild(this$static._beweglichesBild);
    this$static._beweglichesBild = null;
  }
}

function $beiKnopfLoslassen(this$static, evt){
  var mouseEvt;
  mouseEvt = castToNative(evt, $wnd.MouseEvent);
  $beiKnopfLosLassen(this$static._aktion, mouseEvt.clientX + this$static._offsetX, mouseEvt.clientY + this$static._offsetY, this$static._darstellung);
  $abbrechen(this$static);
}

function $beiMausverschiebung(this$static, evt){
  var mouseEvt, boundingBox, svg, bild, x_0, y_0;
  mouseEvt = castToNative(evt, $wnd.MouseEvent);
  if (this$static._beweglichesBild == null) {
    boundingBox = this$static._darstellung._bild.getBoundingClientRect();
    svg = castToNative(($clinit_DomGlobal() , document_0).createElementNS('http://www.w3.org/2000/svg', 'svg'), $wnd.SVGSVGElement);
    svg.setAttributeNS(null, 'viewbox', '0 0 ' + boundingBox.width + ' ' + boundingBox.height);
    svg.setAttributeNS(null, 'width', boundingBox.width + 'px');
    svg.setAttributeNS(null, 'height', boundingBox.height + 'px');
    bild = $erzeugeBild(this$static._darstellung);
    positioniereBild(svg, bild, 0, 0);
    svg.appendChild(bild);
    x_0 = boundingBox.x;
    y_0 = boundingBox.y;
    this$static._offsetX = x_0 - mouseEvt.clientX;
    this$static._offsetY = y_0 - mouseEvt.clientY;
    this$static._beweglichesBild = castToNative(document_0.createElement('div'), $wnd.HTMLElement);
    this$static._beweglichesBild.appendChild(svg);
    this$static._beweglichesBild.style.position = 'absolute';
    $setzePosition(this$static._beweglichesBild, mouseEvt.clientX + this$static._offsetX, mouseEvt.clientY + this$static._offsetY);
    document_0.body.appendChild(this$static._beweglichesBild);
    $verstecke(this$static._darstellung);
  }
   else {
    $setzePosition(this$static._beweglichesBild, mouseEvt.clientX + this$static._offsetX, mouseEvt.clientY + this$static._offsetY);
  }
}

function $setzePosition(container, x_0, y_0){
  container.style.left = x_0 + 'px';
  container.style.top = y_0 + 'px';
}

function $start(this$static, evt){
  ($clinit_DomGlobal() , document_0).addEventListener('mousemove', this$static._beiMausverschiebung = new Verschiebung$0methodref$beiMausverschiebung$Type(this$static));
  document_0.addEventListener('mouseup', this$static._beiKnopfLoslassen = new Verschiebung$1methodref$beiKnopfLoslassen$Type(this$static));
  this$static._offsetX = evt.clientX;
  this$static._offsetY = evt.clientY;
}

function Verschiebung(darstellung, aktion){
  this._darstellung = darstellung;
  this._aktion = aktion;
}

defineClass(94, 1, {}, Verschiebung);
_._offsetX = 0;
_._offsetY = 0;
var Lqwirkle_client_Verschiebung_2_classLit = createForClass('qwirkle.client', 'Verschiebung', 94);
function Verschiebung$0methodref$beiMausverschiebung$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(95, 1, {}, Verschiebung$0methodref$beiMausverschiebung$Type);
_.handleEvent = function handleEvent_0(arg0){
  $beiMausverschiebung(this.$$outer_0, arg0);
}
;
var Lqwirkle_client_Verschiebung$0methodref$beiMausverschiebung$Type_2_classLit = createForClass('qwirkle.client', 'Verschiebung/0methodref$beiMausverschiebung$Type', 95);
function Verschiebung$1methodref$beiKnopfLoslassen$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(96, 1, {}, Verschiebung$1methodref$beiKnopfLoslassen$Type);
_.handleEvent = function handleEvent_1(arg0){
  $beiKnopfLoslassen(this.$$outer_0, arg0);
}
;
var Lqwirkle_client_Verschiebung$1methodref$beiKnopfLoslassen$Type_2_classLit = createForClass('qwirkle.client', 'Verschiebung/1methodref$beiKnopfLoslassen$Type', 96);
function $entferneStein(this$static, stein){
  $remove_2(this$static._steine, stein);
}

function $fülleAuf(this$static){
  var cnt, darstellung, n, x_0;
  $sort(this$static._steine, new Vorrat$lambda$0$Type);
  x_0 = 0;
  for (n = 0 , cnt = this$static._steine.array.length; n < cnt; n++) {
    $positioniere(castTo($get(this$static._steine, n), 21), x_0, 0);
    x_0 += 100;
  }
  while (this$static._steine.array.length < 6 && this$static._stapel._steine.array.length != 0) {
    darstellung = new SteinDarstellung(this$static._svg, $nimmStein(this$static._stapel));
    $add(this$static._steine, darstellung);
    darstellung._x = x_0;
    positioniereBild(darstellung._svg, darstellung._bild, x_0, 0);
    darstellung._svg.appendChild(darstellung._bild);
    x_0 += 100;
  }
}

function $starteZug(this$static, spielfeld){
  var stein, stein$iterator, zug;
  zug = new Vorrat$Zug(this$static, spielfeld);
  for (stein$iterator = new ArrayList$1(this$static._steine); stein$iterator.i < stein$iterator.this$01.array.length;) {
    stein = castTo($next_0(stein$iterator), 21);
    stein._bild.addEventListener('mousedown', stein._beiKnopfdruck = new SteinDarstellung$lambda$0$Type(stein, zug));
  }
}

function Vorrat(svg, stapel){
  this._steine = new ArrayList;
  this._svg = svg;
  this._stapel = stapel;
}

function lambda$0(s1_0, s2_1){
  return compare_0(s1_0._x, s2_1._x);
}

defineClass(70, 1, {}, Vorrat);
var Lqwirkle_client_Vorrat_2_classLit = createForClass('qwirkle.client', 'Vorrat', 70);
function $beiKnopfLosLassen(this$static, left, top_0, steinDarstellung){
  var dx, dy, entry, gesetzterStein, istZeile, linie, nachbar, nachbar$iterator, opX, opY, operation, operation$iterator, operationen, outerIter, outerIter0, outerIter1, outerIter2, position, reihe, spielfeld, stein, teilZug, testPosition, testX, testY, vorratsStein, x_0, y_0, zugBereich, zugErlaubt, zugPosition, zugPosition$iterator, zugPosition$iterator0;
  position = $berechneSpielfeldPosition(this$static._anzeige, round_int(left), round_int(top_0));
  x_0 = position._x;
  y_0 = position._y;
  teilZug = castTo($remove(this$static._teilZüge, steinDarstellung), 24);
  !!teilZug && (steinDarstellung = ($set_0(teilZug.this$11._anzeige._spielfeld, teilZug._position._x, teilZug._position._y, null) , teilZug._vorratsStein));
  stein = steinDarstellung._stein;
  spielfeld = this$static._anzeige._spielfeld;
  zugErlaubt = $zugErlaubt(spielfeld, x_0, y_0, stein);
  if (zugErlaubt) {
    zugBereich = $zugBereich(this$static, x_0, y_0);
    zugErlaubt = $prüfeGesamtzug(spielfeld, zugBereich, x_0, y_0);
    if (!zugErlaubt) {
      linie = new Bereich(x_0, y_0);
      for (operation$iterator = (outerIter0 = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static._teilZüge)).this$01)).this$01) , new AbstractMap$2$1(outerIter0)); operation$iterator.val$outerIter2.hasNext;) {
        operation = (entry = $next(operation$iterator.val$outerIter2) , castTo(entry.getValue(), 24));
        opX = operation._position._x;
        opY = operation._position._y;
        (linie._y1 == linie._y2 && opY == linie._y1 || linie._x1 == linie._x2 && opX == linie._x1) && $add_2(linie, operation._position);
      }
      reihe = new Bereich(x_0, y_0);
      istZeile = linie._y1 == linie._y2;
      for (zugPosition$iterator0 = (outerIter1 = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(linie._positionen.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter1)); zugPosition$iterator0.val$outerIter2.hasNext;) {
        zugPosition = (entry = $next(zugPosition$iterator0.val$outerIter2) , castTo(entry.getKey(), 6));
        if (istZeile) {
          dx = zugPosition._x > x_0?-1:1;
          for (testX = zugPosition._x; testX != x_0; testX += dx) {
            testPosition = new Position_0(testX, y_0);
            if (!$contains_0(linie._positionen, testPosition) && !$get_1(spielfeld, testPosition._x, testPosition._y)) {
              continue;
            }
          }
        }
         else {
          dy = zugPosition._y > y_0?-1:1;
          for (testY = zugPosition._y; testY != y_0; testY += dy) {
            testPosition = new Position_0(x_0, testY);
            if (!$contains_0(linie._positionen, testPosition) && !$get_1(spielfeld, testPosition._x, testPosition._y)) {
              continue;
            }
          }
        }
        $add_2(reihe, zugPosition);
      }
      for (zugPosition$iterator = (outerIter2 = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(reihe._positionen.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter2)); zugPosition$iterator.val$outerIter2.hasNext;) {
        zugPosition = (entry = $next(zugPosition$iterator.val$outerIter2) , castTo(entry.getKey(), 6));
        for (nachbar$iterator = new AbstractList$IteratorImpl(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_client_Position_2_classLit, 1), $intern_0, 6, 0, [new Position_0(zugPosition._x, zugPosition._y - 1), new Position_0(zugPosition._x, zugPosition._y + 1), new Position_0(zugPosition._x - 1, zugPosition._y), new Position_0(zugPosition._x + 1, zugPosition._y)]))); nachbar$iterator.i < nachbar$iterator.this$01.size_1();) {
          nachbar = (checkCriticalElement(nachbar$iterator.i < nachbar$iterator.this$01.size_1()) , castTo(nachbar$iterator.this$01.get_0(nachbar$iterator.last = nachbar$iterator.i++), 6));
          if ($contains_0(zugBereich._positionen, nachbar)) {
            continue;
          }
          if ($get_1(spielfeld, nachbar._x, nachbar._y)) {
            zugErlaubt = true;
            break;
          }
        }
      }
      if (zugErlaubt) {
        for (operationen = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static._teilZüge)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); operationen.val$outerIter2.hasNext;) {
          operation = (entry = $next(operationen.val$outerIter2) , castTo(entry.getValue(), 24));
          if (!$enthält(linie, operation._position)) {
            vorratsStein = ($set_0(operation.this$11._anzeige._spielfeld, operation._position._x, operation._position._y, null) , operation._vorratsStein);
            gesetzterStein = operation._gesetzterStein;
            !!gesetzterStein._beiKnopfdruck && gesetzterStein._bild.removeEventListener('mousedown', gesetzterStein._beiKnopfdruck);
            gesetzterStein._svg.removeChild(gesetzterStein._bild);
            vorratsStein._svg.appendChild(vorratsStein._bild);
            vorratsStein._bild.addEventListener('mousedown', vorratsStein._beiKnopfdruck = new SteinDarstellung$lambda$0$Type(vorratsStein, this$static));
            $remove_0(operationen.val$outerIter2);
          }
        }
      }
    }
  }
  if (zugErlaubt) {
    gesetzterStein = $fügeEin(this$static._anzeige, x_0, y_0, stein);
    gesetzterStein._bild.classList.add('vorschau');
    gesetzterStein._bild.addEventListener('mousedown', gesetzterStein._beiKnopfdruck = new SteinDarstellung$lambda$0$Type(gesetzterStein, this$static));
    !!steinDarstellung._beiKnopfdruck && steinDarstellung._bild.removeEventListener('mousedown', steinDarstellung._beiKnopfdruck);
    $entferneStein(this$static.this$01, steinDarstellung);
    $put(this$static._teilZüge, gesetzterStein, new Vorrat$Zug$AnlegeOperation(this$static, steinDarstellung, x_0, y_0, gesetzterStein));
  }
   else {
    if (teilZug) {
      $set_0(teilZug.this$11._anzeige._spielfeld, teilZug._position._x, teilZug._position._y, teilZug._vorratsStein._stein);
      $zeigeAn_0(teilZug._gesetzterStein);
      $put(this$static._teilZüge, teilZug._gesetzterStein, teilZug);
    }
     else {
      steinDarstellung._svg.appendChild(steinDarstellung._bild);
    }
  }
}

function $prüfeGesamtzug(spielfeld, zugBereich, x_0, y_0){
  var testX, testY;
  if (!(zugBereich._x1 == zugBereich._x2 || zugBereich._y1 == zugBereich._y2)) {
    return false;
  }
  for (testX = zugBereich._x1; testX <= zugBereich._x2; testX++) {
    for (testY = zugBereich._y1; testY <= zugBereich._y2; testY++) {
      if (!$get_1(spielfeld, testX, testY)) {
        if (testX != x_0 || testY != y_0) {
          return false;
        }
      }
    }
  }
  if (!$nachbarBesetztIn(zugBereich, spielfeld)) {
    return false;
  }
  return true;
}

function $zugBereich(this$static, x_0, y_0){
  var bereich, entry, operation, operation$iterator, outerIter;
  bereich = new Bereich(x_0, y_0);
  for (operation$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static._teilZüge)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); operation$iterator.val$outerIter2.hasNext;) {
    operation = (entry = $next(operation$iterator.val$outerIter2) , castTo(entry.getValue(), 24));
    $add_2(bereich, operation._position);
  }
  return bereich;
}

function Vorrat$Zug(this$0, anzeige){
  this.this$01 = this$0;
  this._teilZüge = new HashMap;
  this._anzeige = anzeige;
}

defineClass(80, 1, {}, Vorrat$Zug);
var Lqwirkle_client_Vorrat$Zug_2_classLit = createForClass('qwirkle.client', 'Vorrat/Zug', 80);
function Vorrat$Zug$AnlegeOperation(this$1, vorratsStein, x_0, y_0, gesetzterStein){
  this.this$11 = this$1;
  this._vorratsStein = vorratsStein;
  this._position = new Position_0(x_0, y_0);
  this._gesetzterStein = gesetzterStein;
}

defineClass(24, 1, {24:1}, Vorrat$Zug$AnlegeOperation);
var Lqwirkle_client_Vorrat$Zug$AnlegeOperation_2_classLit = createForClass('qwirkle.client', 'Vorrat/Zug/AnlegeOperation', 24);
function Vorrat$lambda$0$Type(){
}

defineClass(81, 1, {}, Vorrat$lambda$0$Type);
_.compare = function compare_2(arg0, arg1){
  return lambda$0(castTo(arg0, 21), castTo(arg1, 21));
}
;
_.equals_0 = function equals_9(other){
  return this === other;
}
;
var Lqwirkle_client_Vorrat$lambda$0$Type_2_classLit = createForClass('qwirkle.client', 'Vorrat/lambda$0$Type', 81);
function $nimmStein(this$static){
  return castTo($remove_1(this$static._steine, this$static._steine.array.length - 1), 19);
}

function Nachzugstapel(){
  var farbNummer, farben, formNummer, formen, n;
  this._steine = new ArrayList;
  for (n = 0; n < 3; n++) {
    for (farbNummer = 0 , farben = ($clinit_Qwirkle$Farbe() , stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_shared_Qwirkle$Farbe_2_classLit, 1), $intern_1, 14, 0, [yellow, orange, red, blue, green, magenta])).length; farbNummer < farben; farbNummer++) {
      for (formNummer = 0 , formen = ($clinit_Qwirkle$Form() , stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_shared_Qwirkle$Form_2_classLit, 1), $intern_1, 15, 0, [circle, square, star, pounce, cross, diamond])).length; formNummer < formen; formNummer++) {
        $add(this._steine, new Qwirkle$Stein(stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_shared_Qwirkle$Farbe_2_classLit, 1), $intern_1, 14, 0, [yellow, orange, red, blue, green, magenta])[farbNummer], stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_shared_Qwirkle$Form_2_classLit, 1), $intern_1, 15, 0, [circle, square, star, pounce, cross, diamond])[formNummer]));
      }
    }
  }
  shuffle(this._steine, ($clinit_Collections$RandomHolder() , rnd_0));
}

defineClass(67, 1, {}, Nachzugstapel);
var Lqwirkle_shared_Nachzugstapel_2_classLit = createForClass('qwirkle.shared', 'Nachzugstapel', 67);
function $clinit_Qwirkle$Farbe(){
  $clinit_Qwirkle$Farbe = emptyMethod;
  yellow = new Qwirkle$Farbe('yellow', 0);
  orange = new Qwirkle$Farbe('orange', 1);
  red = new Qwirkle$Farbe('red', 2);
  blue = new Qwirkle$Farbe('blue', 3);
  green = new Qwirkle$Farbe('green', 4);
  magenta = new Qwirkle$Farbe('magenta', 5);
}

function Qwirkle$Farbe(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Qwirkle$Farbe();
  return stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_shared_Qwirkle$Farbe_2_classLit, 1), $intern_1, 14, 0, [yellow, orange, red, blue, green, magenta]);
}

defineClass(14, 12, {3:1, 20:1, 12:1, 14:1}, Qwirkle$Farbe);
var blue, green, magenta, orange, red, yellow;
var Lqwirkle_shared_Qwirkle$Farbe_2_classLit = createForEnum('qwirkle.shared', 'Qwirkle/Farbe', 14, values_0);
function $clinit_Qwirkle$Form(){
  $clinit_Qwirkle$Form = emptyMethod;
  circle = new Qwirkle$Form('circle', 0);
  square = new Qwirkle$Form('square', 1);
  star = new Qwirkle$Form('star', 2);
  pounce = new Qwirkle$Form('pounce', 3);
  cross = new Qwirkle$Form('cross', 4);
  diamond = new Qwirkle$Form('diamond', 5);
}

function Qwirkle$Form(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Qwirkle$Form();
  return stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_shared_Qwirkle$Form_2_classLit, 1), $intern_1, 15, 0, [circle, square, star, pounce, cross, diamond]);
}

defineClass(15, 12, {3:1, 20:1, 12:1, 15:1}, Qwirkle$Form);
var circle, cross, diamond, pounce, square, star;
var Lqwirkle_shared_Qwirkle$Form_2_classLit = createForEnum('qwirkle.shared', 'Qwirkle/Form', 15, values_1);
function Qwirkle$Stein(farbe, form_0){
  this.farbe = farbe;
  this.form_0 = form_0;
}

defineClass(19, 1, {19:1}, Qwirkle$Stein);
var Lqwirkle_shared_Qwirkle$Stein_2_classLit = createForClass('qwirkle.shared', 'Qwirkle/Stein', 19);
function $get_1(this$static, x_0, y_0){
  var xOffset, yOffset;
  xOffset = x_0 - this$static._xMin;
  yOffset = y_0 - this$static._yMin;
  if (xOffset < 0 || yOffset < 0) {
    return null;
  }
  if (xOffset >= this$static._width || yOffset >= this$static._height) {
    return null;
  }
  return this$static._data[yOffset * this$static._width + xOffset];
}

function $keineDoppeltenSteine(this$static, x_0, y_0, dx, dy){
  var all, all0, anzahl, farben, formen;
  farben = (all0 = castTo($getEnumConstants(Lqwirkle_shared_Qwirkle$Farbe_2_classLit), 9) , new EnumSet$EnumSetImpl(all0, castTo(createFrom(all0, all0.length), 9)));
  formen = (all = castTo($getEnumConstants(Lqwirkle_shared_Qwirkle$Form_2_classLit), 9) , new EnumSet$EnumSetImpl(all, castTo(createFrom(all, all.length), 9)));
  anzahl = $prüfeSteine(this$static, farben, formen, x_0, y_0, dx, dy) + $prüfeSteine(this$static, farben, formen, x_0, y_0, -dx, -dy);
  if (anzahl == 0) {
    return true;
  }
  if (farben.size_0 == anzahl && formen.size_0 == 1) {
    return true;
  }
  if (farben.size_0 == 1 && formen.size_0 == anzahl) {
    return true;
  }
  return false;
}

function $passtAnNachbarn(this$static, x_0, y_0, stein, dx, dy){
  var feld, gleicheFarbe, gleicheForm, xPos, yPos;
  xPos = x_0;
  yPos = y_0;
  while (true) {
    xPos += dx;
    yPos += dy;
    feld = $get_1(this$static, xPos, yPos);
    if (!feld) {
      return true;
    }
    gleicheFarbe = feld.farbe == stein.farbe;
    gleicheForm = feld.form_0 == stein.form_0;
    if (gleicheFarbe == gleicheForm) {
      return false;
    }
  }
}

function $prüfeSteine(this$static, farben, formen, x_0, y_0, dx, dy){
  var feld, steine, xPos, yPos;
  steine = 0;
  xPos = x_0;
  yPos = y_0;
  while (true) {
    xPos += dx;
    yPos += dy;
    feld = $get_1(this$static, xPos, yPos);
    if (!feld) {
      return steine;
    }
    ++steine;
    $add_0(farben, feld.farbe);
    $add_0(formen, feld.form_0);
  }
}

function $set_0(this$static, x_0, y_0, stein){
  var dataNew, heightNew, resize, widthNew, xMinNew, xOffset, yCopy, yMinNew, yOffset;
  xOffset = x_0 - this$static._xMin;
  yOffset = y_0 - this$static._yMin;
  resize = false;
  if (xOffset < 0) {
    xMinNew = x_0;
    xOffset = 0;
    resize = true;
  }
   else {
    xMinNew = this$static._xMin;
  }
  if (yOffset < 0) {
    yMinNew = y_0;
    yOffset = 0;
    resize = true;
  }
   else {
    yMinNew = this$static._yMin;
  }
  if (xOffset >= this$static._width) {
    widthNew = x_0 - xMinNew + 1;
    resize = true;
  }
   else {
    widthNew = this$static._xMin + this$static._width - xMinNew;
  }
  if (yOffset >= this$static._height) {
    heightNew = y_0 - yMinNew + 1;
    resize = true;
  }
   else {
    heightNew = this$static._yMin + this$static._height - yMinNew;
  }
  if (resize) {
    dataNew = initUnidimensionalArray(Lqwirkle_shared_Qwirkle$Stein_2_classLit, $intern_0, 19, widthNew * heightNew, 0, 1);
    for (yCopy = 0; yCopy < this$static._height; yCopy++) {
      arraycopy(this$static._data, yCopy * this$static._width, dataNew, this$static._xMin - xMinNew + (this$static._yMin - yMinNew + yCopy) * widthNew, this$static._width);
    }
    this$static._data = dataNew;
    this$static._xMin = xMinNew;
    this$static._yMin = yMinNew;
    this$static._width = widthNew;
    this$static._height = heightNew;
  }
  this$static._data[yOffset * this$static._width + xOffset] = stein;
}

function $zugErlaubt(this$static, x_0, y_0, stein){
  if ($get_1(this$static, x_0, y_0)) {
    return false;
  }
  if (!(!!$get_1(this$static, x_0 - 1, y_0) || !!$get_1(this$static, x_0 + 1, y_0) || !!$get_1(this$static, x_0, y_0 - 1) || !!$get_1(this$static, x_0, y_0 + 1))) {
    return x_0 == 0 && y_0 == 0;
  }
  if (!($passtAnNachbarn(this$static, x_0, y_0, stein, 1, 0) && $passtAnNachbarn(this$static, x_0, y_0, stein, -1, 0) && $keineDoppeltenSteine(this$static, x_0, y_0, 1, 0))) {
    return false;
  }
  if (!($passtAnNachbarn(this$static, x_0, y_0, stein, 0, 1) && $passtAnNachbarn(this$static, x_0, y_0, stein, 0, -1) && $keineDoppeltenSteine(this$static, x_0, y_0, 0, 1))) {
    return false;
  }
  return true;
}

function Spielfeld(){
  this._data = initUnidimensionalArray(Lqwirkle_shared_Qwirkle$Stein_2_classLit, $intern_0, 19, 1, 0, 1);
}

defineClass(68, 1, {}, Spielfeld);
_._height = 1;
_._width = 1;
_._xMin = 0;
_._yMin = 0;
var Lqwirkle_shared_Spielfeld_2_classLit = createForClass('qwirkle.shared', 'Spielfeld', 68);
var D_classLit = createForPrimitive('double', 'D');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie9']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=qwirkle-0.js

