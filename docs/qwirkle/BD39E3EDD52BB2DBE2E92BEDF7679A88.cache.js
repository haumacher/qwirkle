var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.qwirkle;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.9.0";
var $strongName = 'BD39E3EDD52BB2DBE2E92BEDF7679A88';
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
var $intern_0 = {3:1}, $intern_1 = {3:1, 8:1}, $intern_2 = {3:1, 5:1, 4:1}, $intern_3 = {3:1, 12:1, 4:1}, $intern_4 = {22:1, 38:1};
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
function Object_0(){
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
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

defineClass(33, 1, {}, Class);
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
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 33);
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
  return collected = castTo($reduce((lastArg0 = $map(stream((this.suppressedExceptions == null && (this.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_0, 4, 0, 0, 1)) , this.suppressedExceptions)), new Throwable$lambda$0$Type) , of(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 16, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)])) , lastArg0), (lastArg = new ArrayList , lastArg)), 31) , $toArray(collected, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, collected.array.length, 5, 1));
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
defineClass(26, 4, {3:1, 4:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 26);
function RuntimeException(){
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(5, 26, $intern_2);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 5);
defineClass(27, 5, $intern_2);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 27);
defineClass(53, 27, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 53);
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

defineClass(19, 53, {19:1, 3:1, 5:1, 4:1}, JavaScriptException);
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 19);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(81, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 81);
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

function entry(jsFunction){
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
        reportToBrowser(instanceOf(e, 19)?castTo(e, 19).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(62, 81, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 62);
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
defineClass(94, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 94);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(54, 94, {}, StackTraceCreator$CollectorLegacy);
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
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 54);
defineClass(95, 94, {});
_.collect = function collect_0(error){
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 95);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(55, 95, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 55);
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
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $onModuleLoad_0();
}

function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('ie8', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  this.cause_0 = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(12, 4, $intern_3);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 12);
defineClass(7, 12, $intern_3);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 7);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_0('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4):null);
}

defineClass(39, 7, $intern_3, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 39);
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

defineClass(20, 5, $intern_2, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 20);
function ArrayIndexOutOfBoundsException(msg){
  IndexOutOfBoundsException_0.call(this, msg);
}

defineClass(78, 20, $intern_2, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 78);
function ArrayStoreException(){
  RuntimeException.call(this);
}

function ArrayStoreException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(35, 5, $intern_2, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 35);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

booleanCastMap = {3:1, 18:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 91);
function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(49, 5, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 49);
defineClass(92, 1, $intern_0);
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 92);
doubleCastMap = {3:1, 18:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 93);
function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(13, 1, {3:1, 18:1, 13:1});
_.hashCode_0 = function hashCode_1(){
  return getHashCode(this);
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 13);
function IllegalStateException(){
  RuntimeException_0.call(this, "Stream already terminated, can't be modified or used");
}

defineClass(57, 5, $intern_2, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 57);
defineClass(135, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(34, 27, $intern_2, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 34);
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other);
}

stringCastMap = {3:1, 44:1, 18:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(58, 20, $intern_2, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 58);
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

defineClass(139, 1, {});
function Throwable$lambda$0$Type(){
}

defineClass(40, 1, {}, Throwable$lambda$0$Type);
var Ljava_lang_Throwable$lambda$0$Type_2_classLit = createForClass('java.lang', 'Throwable/lambda$0$Type', 40);
function UnsupportedOperationException(){
  RuntimeException_0.call(this, 'Add not supported on this collection');
}

defineClass(59, 5, $intern_2, UnsupportedOperationException);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 59);
defineClass(96, 1, {22:1});
_.add_0 = function add_0(o){
  throw toJs(new UnsupportedOperationException);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 96);
defineClass(97, 96, {22:1, 31:1});
_.add_0 = function add_1(obj){
  $add(this, this.size_1(), obj);
  return true;
}
;
_.hashCode_0 = function hashCode_2(){
  return hashCode_5(this);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 97);
defineClass(98, 96, $intern_4);
_.hashCode_0 = function hashCode_3(){
  return hashCode_4(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 98);
function $add(this$static, index_0, o){
  checkCriticalPositionIndex(index_0, this$static.array.length);
  insertTo(this$static.array, index_0, o);
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

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
}

defineClass(17, 97, {3:1, 17:1, 22:1, 31:1}, ArrayList);
_.add_0 = function add_2(o){
  return this.array[this.array.length] = o , true;
}
;
_.size_1 = function size_1(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 17);
function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(24, 1, {}, ArrayList$1);
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 24);
function spliterator_0(array, endExclusive){
  return checkCriticalArrayBounds(endExclusive, array.length) , new Spliterators$ArraySpliterator(array, endExclusive);
}

function stream(array){
  return new StreamImpl(null, spliterator_0(array, array.length));
}

function hashCode_4(collection){
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = new EnumSet$EnumSetImpl$IteratorImpl(collection); e$iterator.i < e$iterator.this$11.all.length;) {
    e = (checkCriticalElement(e$iterator.i < e$iterator.this$11.all.length) , e$iterator.last = e$iterator.i , $findNext(e$iterator) , e$iterator.this$11.set_0[e$iterator.last]);
    hashCode = hashCode + (e?getHashCode(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_5(list){
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = new ArrayList$1(list); e$iterator.i < e$iterator.this$01.array.length;) {
    e = (checkCriticalElement(e$iterator.i < e$iterator.this$01.array.length) , e$iterator.last = e$iterator.i++ , e$iterator.this$01.array[e$iterator.last]);
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

defineClass(99, 98, $intern_4);
var Ljava_util_EnumSet_2_classLit = createForClass('java.util', 'EnumSet', 99);
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

function EnumSet$EnumSetImpl(all, set_0){
  this.all = all;
  this.set_0 = set_0;
  this.size_0 = 0;
}

defineClass(25, 99, {22:1, 25:1, 38:1}, EnumSet$EnumSetImpl);
_.add_0 = function add_3(e){
  return $add_0(this, castTo(e, 13));
}
;
_.size_1 = function size_2(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_EnumSet$EnumSetImpl_2_classLit = createForClass('java.util', 'EnumSet/EnumSetImpl', 25);
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

defineClass(28, 1, {}, EnumSet$EnumSetImpl$IteratorImpl);
_.i = -1;
_.last = -1;
var Ljava_util_EnumSet$EnumSetImpl$IteratorImpl_2_classLit = createForClass('java.util', 'EnumSet/EnumSetImpl/IteratorImpl', 28);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(68, 5, $intern_2, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 68);
function $forEachRemaining(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

function checkCriticalArrayBounds(end, length_0){
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

defineClass(70, 1, {});
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
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 70);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(71, 70, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 71);
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

defineClass(63, 1, {});
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
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 63);
function $consume(this$static, consumer, index_0){
  consumer.accept(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(64, 63, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_1(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.tryAdvance = function tryAdvance(consumer){
  return $tryAdvance(this, consumer);
}
;
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 64);
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
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 16, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(16, 13, {3:1, 18:1, 13:1, 16:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 16, values);
function CollectorImpl(){
}

defineClass(79, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 79);
function Collectors$20methodref$add$Type(){
}

defineClass(42, 1, {}, Collectors$20methodref$add$Type);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 42);
function Collectors$21methodref$ctor$Type(){
}

defineClass(41, 1, {}, Collectors$21methodref$ctor$Type);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 41);
function Collectors$lambda$42$Type(){
}

defineClass(43, 1, {}, Collectors$lambda$42$Type);
var Ljava_util_stream_Collectors$lambda$42$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$42$Type', 43);
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
    throw toJs(new IllegalStateException);
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

defineClass(69, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 69);
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
  castTo(a_1, 22).add_0(t_2);
  return a_1;
}

function lambda$5(consumer_0, item_2){
  $accept(consumer_0, lambda$4(consumer_0.value_0, item_2));
}

defineClass(36, 69, {}, StreamImpl);
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 36);
function StreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.original = original;
}

defineClass(72, 71, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_0(action){
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(action));
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 72);
function StreamImpl$MapToObjSpliterator$lambda$0$Type(action_1){
  this.action_1 = action_1;
}

defineClass(74, 1, {}, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept = function accept(arg0){
  this.action_1.accept(castTo(arg0, 4).backingJsObject);
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 74);
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(73, 1, {}, StreamImpl$ValueConsumer);
_.accept = function accept_0(value_0){
  $accept(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 73);
function StreamImpl$lambda$5$Type(consumer_0){
  this.consumer_0 = consumer_0;
}

defineClass(75, 1, {}, StreamImpl$lambda$5$Type);
_.accept = function accept_1(arg0){
  lambda$5(this.consumer_0, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 75);
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

defineClass(137, 1, {});
function stampJavaTypeInfo_0(array, referenceType){
  return getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array) , array;
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

defineClass(134, 1, {});
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
defineClass(759, 1, {});
function $onModuleLoad_0(){
  var darstellung, n, spielfeld, spielfeldAnzeige, spielfeldDarstellung, stein, vorratsAnzeige, zug;
  spielfeldAnzeige = castToNative(($clinit_DomGlobal() , document_0).getElementById('spielfeld'), $wnd.SVGSVGElement);
  spielfeld = new Spielfeld;
  $set(spielfeld, 0, 0, new Qwirkle$Stein(($clinit_Qwirkle$Farbe() , red), ($clinit_Qwirkle$Form() , circle)));
  $set(spielfeld, 0, 1, new Qwirkle$Stein(red, square));
  $set(spielfeld, 1, 0, new Qwirkle$Stein(green, circle));
  spielfeldDarstellung = new SpielfeldDarstellung(spielfeldAnzeige, spielfeld);
  $zeigeAn(spielfeldDarstellung);
  vorratsAnzeige = castToNative(document_0.getElementById('vorrat'), $wnd.SVGSVGElement);
  zug = new App$Zug(spielfeldDarstellung);
  for (n = 0; n < 6; n++) {
    stein = new Qwirkle$Stein(stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_shared_Qwirkle$Farbe_2_classLit, 1), $intern_1, 10, 0, [yellow, orange, red, blue, green, magenta])[n], stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_shared_Qwirkle$Form_2_classLit, 1), $intern_1, 11, 0, [circle, square, star, pounce, cross, diamond])[n]);
    darstellung = new SteinDarstellung(vorratsAnzeige, stein);
    positioniereBild(darstellung._svg, darstellung._bild, 50 + n * 100, 0);
    darstellung._svg.appendChild(darstellung._bild);
    darstellung._bild.addEventListener('mousedown', darstellung._beiKnopfdruck = new SteinDarstellung$lambda$0$Type(darstellung, zug));
  }
}

function $beiKnopfLosLassen(this$static, left, top_0, steinDarstellung){
  var position, stein, x_0, y_0;
  position = $berechneSpielfeldPosition(this$static._spielfeldDarstellung, round_int(left), round_int(top_0));
  stein = steinDarstellung._stein;
  x_0 = position._x;
  y_0 = position._y;
  if ($zugErlaubt(this$static._spielfeldDarstellung._spielfeld, x_0, y_0, stein)) {
    $fügeEin(this$static._spielfeldDarstellung, x_0, y_0, stein);
    !!steinDarstellung._beiKnopfdruck && steinDarstellung._bild.removeEventListener('mousedown', steinDarstellung._beiKnopfdruck);
  }
   else {
    steinDarstellung._svg.appendChild(steinDarstellung._bild);
  }
}

function App$Zug(spielfeldDarstellung){
  this._spielfeldDarstellung = spielfeldDarstellung;
}

defineClass(47, 1, {}, App$Zug);
var Lqwirkle_client_App$Zug_2_classLit = createForClass('qwirkle.client', 'App/Zug', 47);
function Position_0(x_0, y_0){
  this._x = x_0;
  this._y = y_0;
}

defineClass(77, 1, {}, Position_0);
_._x = 0;
_._y = 0;
var Lqwirkle_client_Position_2_classLit = createForClass('qwirkle.client', 'Position', 77);
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
  $set(this$static._spielfeld, x_0, y_0, stein);
  $zeigeStein(this$static, x_0, y_0, stein);
}

function $zeigeAn(this$static){
  var height, stein, width_0, x_0, xMin, y_0, yMin;
  xMin = this$static._spielfeld._xMin;
  yMin = this$static._spielfeld._yMin;
  width_0 = this$static._spielfeld._width;
  height = this$static._spielfeld._height;
  for (x_0 = 0; x_0 < width_0; x_0++) {
    for (y_0 = 0; y_0 < height; y_0++) {
      stein = $get(this$static._spielfeld, xMin + x_0, yMin + y_0);
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

defineClass(46, 1, {}, SpielfeldDarstellung);
_._xOffset = 0;
_._yOffset = 0;
var Lqwirkle_client_SpielfeldDarstellung_2_classLit = createForClass('qwirkle.client', 'SpielfeldDarstellung', 46);
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
  positioniereBild(this$static._svg, this$static._bild, x_0, y_0);
}

function $verstecke(this$static){
  this$static._svg.removeChild(this$static._bild);
}

function SteinDarstellung(svg, stein){
  this._svg = svg;
  this._stein = stein;
  this._bild = $erzeugeBild(this);
}

defineClass(32, 1, {}, SteinDarstellung);
var Lqwirkle_client_SteinDarstellung_2_classLit = createForClass('qwirkle.client', 'SteinDarstellung', 32);
function SteinDarstellung$lambda$0$Type($$outer_0, aktion_1){
  this.$$outer_0 = $$outer_0;
  this.aktion_1 = aktion_1;
}

defineClass(48, 1, {}, SteinDarstellung$lambda$0$Type);
_.handleEvent = function handleEvent(arg0){
  $lambda$0(this.$$outer_0, this.aktion_1, arg0);
}
;
var Lqwirkle_client_SteinDarstellung$lambda$0$Type_2_classLit = createForClass('qwirkle.client', 'SteinDarstellung/lambda$0$Type', 48);
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

defineClass(65, 1, {}, Verschiebung);
_._offsetX = 0;
_._offsetY = 0;
var Lqwirkle_client_Verschiebung_2_classLit = createForClass('qwirkle.client', 'Verschiebung', 65);
function Verschiebung$0methodref$beiMausverschiebung$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(66, 1, {}, Verschiebung$0methodref$beiMausverschiebung$Type);
_.handleEvent = function handleEvent_0(arg0){
  $beiMausverschiebung(this.$$outer_0, arg0);
}
;
var Lqwirkle_client_Verschiebung$0methodref$beiMausverschiebung$Type_2_classLit = createForClass('qwirkle.client', 'Verschiebung/0methodref$beiMausverschiebung$Type', 66);
function Verschiebung$1methodref$beiKnopfLoslassen$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(67, 1, {}, Verschiebung$1methodref$beiKnopfLoslassen$Type);
_.handleEvent = function handleEvent_1(arg0){
  $beiKnopfLoslassen(this.$$outer_0, arg0);
}
;
var Lqwirkle_client_Verschiebung$1methodref$beiKnopfLoslassen$Type_2_classLit = createForClass('qwirkle.client', 'Verschiebung/1methodref$beiKnopfLoslassen$Type', 67);
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
  return stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_shared_Qwirkle$Farbe_2_classLit, 1), $intern_1, 10, 0, [yellow, orange, red, blue, green, magenta]);
}

defineClass(10, 13, {3:1, 18:1, 13:1, 10:1}, Qwirkle$Farbe);
var blue, green, magenta, orange, red, yellow;
var Lqwirkle_shared_Qwirkle$Farbe_2_classLit = createForEnum('qwirkle.shared', 'Qwirkle/Farbe', 10, values_0);
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
  return stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_shared_Qwirkle$Form_2_classLit, 1), $intern_1, 11, 0, [circle, square, star, pounce, cross, diamond]);
}

defineClass(11, 13, {3:1, 18:1, 13:1, 11:1}, Qwirkle$Form);
var circle, cross, diamond, pounce, square, star;
var Lqwirkle_shared_Qwirkle$Form_2_classLit = createForEnum('qwirkle.shared', 'Qwirkle/Form', 11, values_1);
function Qwirkle$Stein(farbe, form_0){
  this.farbe = farbe;
  this.form_0 = form_0;
}

defineClass(14, 1, {14:1}, Qwirkle$Stein);
var Lqwirkle_shared_Qwirkle$Stein_2_classLit = createForClass('qwirkle.shared', 'Qwirkle/Stein', 14);
function $get(this$static, x_0, y_0){
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
  farben = (all0 = castTo($getEnumConstants(Lqwirkle_shared_Qwirkle$Farbe_2_classLit), 8) , new EnumSet$EnumSetImpl(all0, castTo(createFrom(all0, all0.length), 8)));
  formen = (all = castTo($getEnumConstants(Lqwirkle_shared_Qwirkle$Form_2_classLit), 8) , new EnumSet$EnumSetImpl(all, castTo(createFrom(all, all.length), 8)));
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
    feld = $get(this$static, xPos, yPos);
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
    feld = $get(this$static, xPos, yPos);
    if (!feld) {
      return steine;
    }
    ++steine;
    $add_0(farben, feld.farbe);
    $add_0(formen, feld.form_0);
  }
}

function $set(this$static, x_0, y_0, stein){
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
    dataNew = initUnidimensionalArray(Lqwirkle_shared_Qwirkle$Stein_2_classLit, $intern_0, 14, widthNew * heightNew, 0, 1);
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
  if ($get(this$static, x_0, y_0)) {
    return false;
  }
  if (!(!!$get(this$static, x_0 - 1, y_0) || !!$get(this$static, x_0 + 1, y_0) || !!$get(this$static, x_0, y_0 - 1) || !!$get(this$static, x_0, y_0 + 1))) {
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
  this._data = initUnidimensionalArray(Lqwirkle_shared_Qwirkle$Stein_2_classLit, $intern_0, 14, 1, 0, 1);
}

defineClass(45, 1, {}, Spielfeld);
_._height = 1;
_._width = 1;
_._xMin = 0;
_._yMin = 0;
var Lqwirkle_shared_Spielfeld_2_classLit = createForClass('qwirkle.shared', 'Spielfeld', 45);
var D_classLit = createForPrimitive('double', 'D');
var $entry = ($clinit_Impl() , entry);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=qwirkle-0.js

