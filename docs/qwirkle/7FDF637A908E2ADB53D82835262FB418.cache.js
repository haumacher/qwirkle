var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.qwirkle;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.9.0";
var $strongName = '7FDF637A908E2ADB53D82835262FB418';
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
var $intern_0 = {3:1, 4:1}, $intern_1 = {3:1, 11:1, 4:1}, $intern_2 = {3:1, 15:1, 12:1}, $intern_3 = 4194303, $intern_4 = 1048575, $intern_5 = 524288, $intern_6 = 4194304, $intern_7 = 17592186044416, $intern_8 = -17592186044416, $intern_9 = {3:1, 42:1, 12:1}, $intern_10 = {3:1}, $intern_11 = {l:3355444, m:838860, h:996147}, $intern_12 = {46:1, 3:1, 12:1}, $intern_13 = {29:1, 50:1}, $intern_14 = {29:1, 43:1}, $intern_15 = {23:1}, $intern_16 = {3:1, 29:1, 43:1}, $intern_17 = {3:1, 101:1}, $intern_18 = {3:1, 29:1, 50:1}, $intern_19 = 15525485, $intern_20 = 5.9604644775390625E-8, $intern_21 = 16777216, $intern_22 = {9:1};
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

function toString_4(object){
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

function makeLambdaFunction(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
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
  return instanceOfString(this$static)?getHashCode_1(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode_0(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode_0(this$static);
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
  return getHashCode_0(this);
}
;
_.toString_0 = function toString_0(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
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
_.toString = function(){
  return this.toString_0();
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

function castToArray(src_0){
  var elementTypeCategory;
  checkCriticalType(src_0 == null || Array.isArray(src_0) && (elementTypeCategory = getElementTypeCategory(src_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16)));
  return src_0;
}

function castToBoolean(src_0){
  checkCriticalType(src_0 == null || instanceOfBoolean(src_0));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToNative(src_0, jsType){
  checkCriticalType(src_0 == null || src_0 && jsType && src_0 instanceof jsType);
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
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

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
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

function throwClassCastExceptionUnlessNull(o){
  checkCriticalType(o == null);
  return o;
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

defineClass(136, 1, {}, Class);
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
  return $ensureNamesAreInitialized(this) , this.simpleName;
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
_.toString_0 = function toString_10(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 136);
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

function Throwable(){
  $fillInStackTrace(this);
  this.initializeBackingError();
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

defineClass(12, 1, {3:1, 12:1});
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
  return collected = castTo($reduce((lastArg0 = $map(stream_0((this.suppressedExceptions == null && (this.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_0, 12, 0, 0, 1)) , this.suppressedExceptions)), new Throwable$lambda$0$Type) , of(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 51, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)])) , lastArg0), (lastArg = new ArrayList , lastArg)), 43) , collected.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, collected.size_1(), 5, 1));
}
;
_.getCause = function getCause(){
  return this.cause_0;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  $setBackingJsObject(this, fixIE(this.createError($toString(this, this.detailMessage))));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_1(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.writableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 12);
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(80, 12, {3:1, 12:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 80);
function RuntimeException(){
  Throwable.call(this);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(cause){
  this.detailMessage = !cause?null:$toString(cause, cause.getMessage());
  this.cause_0 = cause;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(15, 80, $intern_2, RuntimeException_1);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 15);
defineClass(104, 15, $intern_2);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 104);
defineClass(179, 104, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 179);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $fillInStackTrace(this);
  this.backingJsObject = e;
  $linkBack(this, e);
  this.detailMessage = e == null?'null':toString_4(e);
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(83, 179, {83:1, 3:1, 15:1, 12:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 83);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(379, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 379);
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
      if (instanceOf($e0, 12)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 83)?castTo(e, 83).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(219, 379, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 219);
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
defineClass(394, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 394);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(180, 394, {}, StackTraceCreator$CollectorLegacy);
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
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 180);
defineClass(395, 394, {});
_.collect = function collect_0(error){
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 395);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(181, 395, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 181);
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

function newArray(size_0){
  return new Array(size_0);
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

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_3;
  a1 = value_0 >> 22 & $intern_3;
  a2 = value_0 < 0?$intern_4:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_5 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = !negative;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_5 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_5 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_3;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_3;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_4;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_3;
  a.m = sum1 & $intern_3;
  a.h = sum2 & $intern_4;
  return true;
}

var remainder;
function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_3;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_3;
  c2 += c1 >> 22;
  c1 &= $intern_3;
  c2 &= $intern_4;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_3;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_3;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_4;
  return create0(neg0, neg1, neg2);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_3, res1 & $intern_3, res2 & $intern_4);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_5) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_4:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_4:0;
    res1 = negative?$intern_3:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_3, res1 & $intern_3, res2 & $intern_4);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_3, sum1 & $intern_3, sum2 & $intern_4);
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_2(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_5 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_2(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_3, $intern_3, 524287);
  create0(0, 0, $intern_5);
  ONE = create(1);
  create(2);
  create(0);
}

var MAX_VALUE, ONE;
function toJava(e){
  var javaException;
  if (instanceOf(e, 12)) {
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

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_6;
  }
  if (a2 == $intern_4) {
    return big_0.l + big_0.m * $intern_6 - $intern_7;
  }
  return big_0;
}

function eq(a, b){
  return compare_0(a, b) == 0;
}

function gt(a, b){
  return compare_0(a, b) > 0;
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function mul_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a * b;
    if ($intern_8 < result && result < $intern_7) {
      return result;
    }
  }
  return createLongEmul(mul(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function neg_0(a){
  var result;
  if (isSmallLong0(a)) {
    result = 0 - a;
    if (!isNaN(result)) {
      return result;
    }
  }
  return createLongEmul(neg(a));
}

function neq(a, b){
  return compare_0(a, b) != 0;
}

function sub_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if ($intern_8 < result && result < $intern_7) {
      return result;
    }
  }
  return createLongEmul(sub_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_7;
    a3 = $intern_4;
  }
  a1 = round_int(value_0 / $intern_6);
  a0 = round_int(value_0 - a1 * $intern_6);
  return create0(a0, a1, a3);
}

function toString_3(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_2(a);
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $onModuleLoad_0(new App);
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

defineClass(42, 12, $intern_9);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 42);
function AssertionError(){
  Throwable.call(this);
}

defineClass(28, 42, $intern_9, AssertionError);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 28);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_4('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 12)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 12):null);
}

defineClass(156, 28, $intern_9, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 156);
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

function $readFields(this$static, in_0){
  var field;
  while ($hasNext(in_0)) {
    field = $nextName(in_0);
    this$static.readField(in_0, field);
  }
}

function $toJson(this$static){
  var ex, out;
  out = new StringW;
  try {
    this$static.writeTo(new JsonWriter(out));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 46)) {
      ex = $e0;
      throw toJs(new RuntimeException_1(ex));
    }
     else 
      throw toJs($e0);
  }
  return out._buffer.string;
}

function $writeContent(this$static, out){
  $writeDeferredName(out);
  $open(out, 3, '{');
  this$static.writeFields(out);
  $close(out, 3, 5, '}');
}

defineClass(382, 1, {});
_.readField = function readField(in_0, field){
  $skipValue(in_0);
}
;
_.toString_0 = function toString_5(){
  return $toJson(this);
}
;
_.writeFields = function writeFields(out){
}
;
var Lde_haumacher_msgbuf_data_AbstractDataObject_2_classLit = createForClass('de.haumacher.msgbuf.data', 'AbstractDataObject', 382);
function $read(this$static, cbuf, off, len){
  var count, end;
  count = $wnd.Math.min(len, this$static._in.length - this$static._pos);
  end = this$static._pos + count;
  $getChars(this$static._in, this$static._pos, end, cbuf, off);
  this$static._pos = end;
  return count;
}

function StringR(in_0){
  this._in = in_0;
}

defineClass(253, 1, {}, StringR);
_._pos = 0;
var Lde_haumacher_msgbuf_io_StringR_2_classLit = createForClass('de.haumacher.msgbuf.io', 'StringR', 253);
function $write(this$static, str){
  $append_3(this$static._buffer, str);
}

function $write_0(this$static, str, start_0, length_0){
  $append_2(this$static._buffer, str, start_0, start_0 + length_0);
}

function StringW(){
  this._buffer = new StringBuilder;
}

defineClass(130, 1, {}, StringW);
_.toString_0 = function toString_6(){
  return this._buffer.string;
}
;
var Lde_haumacher_msgbuf_io_StringW_2_classLit = createForClass('de.haumacher.msgbuf.io', 'StringW', 130);
function $clinit_JsonReader(){
  var n, charArr;
  $clinit_JsonReader = emptyMethod;
  n = ")]}'\n".length;
  charArr = initUnidimensionalArray(C_classLit, $intern_10, 38, n, 15, 1);
  $getChars0(")]}'\n", 0, n, charArr, 0);
}

function $beginArray(this$static){
  var p;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 3) {
    $push(this$static, 1);
    this$static.pathIndices[this$static.stackSize - 1] = 0;
    this$static.peeked = 0;
  }
   else {
    throw toJs(new IllegalStateException_0('Expected BEGIN_ARRAY but was ' + $peek(this$static) + $locationString(this$static)));
  }
}

function $beginObject(this$static){
  var p;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 1) {
    $push(this$static, 3);
    this$static.peeked = 0;
  }
   else {
    throw toJs(new IllegalStateException_0('Expected BEGIN_OBJECT but was ' + $peek(this$static) + $locationString(this$static)));
  }
}

function $checkLenient(this$static){
  throw toJs($syntaxError(this$static, 'Use JsonReader.setLenient(true) to accept malformed JSON'));
}

function $doPeek(this$static){
  var c, c0, c1, peekStack, result;
  peekStack = this$static.stack_0[this$static.stackSize - 1];
  if (peekStack == 1) {
    this$static.stack_0[this$static.stackSize - 1] = 2;
  }
   else if (peekStack == 2) {
    c0 = $nextNonWhitespace(this$static, true);
    switch (c0) {
      case 93:
        return this$static.peeked = 4;
      case 59:
        $checkLenient(this$static);
      case 44:
        break;
      default:throw toJs($syntaxError(this$static, 'Unterminated array'));
    }
  }
   else if (peekStack == 3 || peekStack == 5) {
    this$static.stack_0[this$static.stackSize - 1] = 4;
    if (peekStack == 5) {
      c0 = $nextNonWhitespace(this$static, true);
      switch (c0) {
        case 125:
          return this$static.peeked = 2;
        case 59:
          $checkLenient(this$static);
        case 44:
          break;
        default:throw toJs($syntaxError(this$static, 'Unterminated object'));
      }
    }
    c1 = $nextNonWhitespace(this$static, true);
    switch (c1) {
      case 34:
        return this$static.peeked = 13;
      case 39:
        $checkLenient(this$static);
        return this$static.peeked = 12;
      case 125:
        if (peekStack != 5) {
          return this$static.peeked = 2;
        }
         else {
          throw toJs($syntaxError(this$static, 'Expected name'));
        }

      default:$checkLenient(this$static);
        --this$static.pos;
        if ($isLiteral(this$static, c1 & 65535)) {
          return this$static.peeked = 14;
        }
         else {
          throw toJs($syntaxError(this$static, 'Expected name'));
        }

    }
  }
   else if (peekStack == 4) {
    this$static.stack_0[this$static.stackSize - 1] = 5;
    c0 = $nextNonWhitespace(this$static, true);
    switch (c0) {
      case 58:
        break;
      case 61:
        $checkLenient(this$static);
        (this$static.pos < this$static.limit || $fillBuffer(this$static, 1)) && this$static.buffer[this$static.pos] == 62 && ++this$static.pos;
        break;
      default:throw toJs($syntaxError(this$static, "Expected ':'"));
    }
  }
   else if (peekStack == 6) {
    this$static.stack_0[this$static.stackSize - 1] = 7;
  }
   else if (peekStack == 7) {
    c0 = $nextNonWhitespace(this$static, false);
    if (c0 == -1) {
      return this$static.peeked = 17;
    }
     else {
      $checkLenient(this$static);
      --this$static.pos;
    }
  }
   else if (peekStack == 8) {
    throw toJs(new IllegalStateException_0('JsonReader is closed'));
  }
  c = $nextNonWhitespace(this$static, true);
  switch (c) {
    case 93:
      if (peekStack == 1) {
        return this$static.peeked = 4;
      }

    case 59:
    case 44:
      if (peekStack == 1 || peekStack == 2) {
        $checkLenient(this$static);
        --this$static.pos;
        return this$static.peeked = 7;
      }
       else {
        throw toJs($syntaxError(this$static, 'Unexpected value'));
      }

    case 39:
      $checkLenient(this$static);
      return this$static.peeked = 8;
    case 34:
      return this$static.peeked = 9;
    case 91:
      return this$static.peeked = 3;
    case 123:
      return this$static.peeked = 1;
    default:--this$static.pos;
  }
  result = $peekKeyword(this$static);
  if (result != 0) {
    return result;
  }
  result = $peekNumber(this$static);
  if (result != 0) {
    return result;
  }
  if (!$isLiteral(this$static, this$static.buffer[this$static.pos])) {
    throw toJs($syntaxError(this$static, 'Expected value'));
  }
  $checkLenient(this$static);
  return this$static.peeked = 10;
}

function $endArray(this$static){
  var p;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 4) {
    --this$static.stackSize;
    ++this$static.pathIndices[this$static.stackSize - 1];
    this$static.peeked = 0;
  }
   else {
    throw toJs(new IllegalStateException_0('Expected END_ARRAY but was ' + $peek(this$static) + $locationString(this$static)));
  }
}

function $endObject(this$static){
  var p;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 2) {
    --this$static.stackSize;
    this$static.pathNames[this$static.stackSize] = null;
    ++this$static.pathIndices[this$static.stackSize - 1];
    this$static.peeked = 0;
  }
   else {
    throw toJs(new IllegalStateException_0('Expected END_OBJECT but was ' + $peek(this$static) + $locationString(this$static)));
  }
}

function $fillBuffer(this$static, minimum){
  var buffer, total;
  buffer = this$static.buffer;
  this$static.lineStart -= this$static.pos;
  if (this$static.limit != this$static.pos) {
    this$static.limit -= this$static.pos;
    arraycopy(buffer, this$static.pos, buffer, 0, this$static.limit);
  }
   else {
    this$static.limit = 0;
  }
  this$static.pos = 0;
  while ((total = $read(this$static.in_0, buffer, this$static.limit, buffer.length - this$static.limit)) != -1) {
    this$static.limit += total;
    if (this$static.lineNumber == 0 && this$static.lineStart == 0 && this$static.limit > 0 && buffer[0] == 65279) {
      ++this$static.pos;
      ++this$static.lineStart;
      ++minimum;
    }
    if (this$static.limit >= minimum) {
      return true;
    }
  }
  return false;
}

function $getPath(this$static){
  var i, result, size_0;
  result = $append(new StringBuilder, 36);
  for (i = 0 , size_0 = this$static.stackSize; i < size_0; i++) {
    switch (this$static.stack_0[i]) {
      case 1:
      case 2:
        $append($append_0((result.string += '[' , result), this$static.pathIndices[i]), 93);
        break;
      case 3:
      case 4:
      case 5:
        result.string += '.';
        this$static.pathNames[i] != null && $append_3(result, this$static.pathNames[i]);
    }
  }
  return result.string;
}

function $hasNext(this$static){
  var p;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  return p != 2 && p != 4;
}

function $isLiteral(this$static, c){
  switch (c) {
    case 47:
    case 92:
    case 59:
    case 35:
    case 61:
      $checkLenient(this$static);
    case 123:
    case 125:
    case 91:
    case 93:
    case 58:
    case 44:
    case 32:
    case 9:
    case 12:
    case 13:
    case 10:
      return false;
    default:return true;
  }
}

function $locationString(this$static){
  var column, line;
  line = this$static.lineNumber + 1;
  column = this$static.pos - this$static.lineStart + 1;
  return ' at line ' + line + ' column ' + column + ' path ' + $getPath(this$static);
}

function $nextName(this$static){
  var p, result;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 14) {
    result = $nextUnquotedValue(this$static);
  }
   else if (p == 12) {
    result = $nextQuotedValue(this$static, 39);
  }
   else if (p == 13) {
    result = $nextQuotedValue(this$static, 34);
  }
   else {
    throw toJs(new IllegalStateException_0('Expected a name but was ' + $peek(this$static) + $locationString(this$static)));
  }
  this$static.peeked = 0;
  this$static.pathNames[this$static.stackSize - 1] = result;
  return result;
}

function $nextNonWhitespace(this$static, throwOnEof){
  var buffer, c, charsLoaded, l, p, peek;
  buffer = this$static.buffer;
  p = this$static.pos;
  l = this$static.limit;
  while (true) {
    if (p == l) {
      this$static.pos = p;
      if (!$fillBuffer(this$static, 1)) {
        break;
      }
      p = this$static.pos;
      l = this$static.limit;
    }
    c = buffer[p++];
    if (c == 10) {
      ++this$static.lineNumber;
      this$static.lineStart = p;
      continue;
    }
     else if (c == 32 || c == 13 || c == 9) {
      continue;
    }
    if (c == 47) {
      this$static.pos = p;
      if (p == l) {
        --this$static.pos;
        charsLoaded = $fillBuffer(this$static, 2);
        ++this$static.pos;
        if (!charsLoaded) {
          return c;
        }
      }
      $checkLenient(this$static);
      peek = buffer[this$static.pos];
      switch (peek) {
        case 42:
          ++this$static.pos;
          if (!$skipTo(this$static)) {
            throw toJs($syntaxError(this$static, 'Unterminated comment'));
          }

          p = this$static.pos + 2;
          l = this$static.limit;
          continue;
        case 47:
          ++this$static.pos;
          $skipToEndOfLine(this$static);
          p = this$static.pos;
          l = this$static.limit;
          continue;
        default:return c;
      }
    }
     else if (c == 35) {
      this$static.pos = p;
      $checkLenient(this$static);
      $skipToEndOfLine(this$static);
      p = this$static.pos;
      l = this$static.limit;
    }
     else {
      this$static.pos = p;
      return c;
    }
  }
  if (throwOnEof) {
    throw toJs(new IOException('End of input' + $locationString(this$static)));
  }
   else {
    return -1;
  }
}

function $nextQuotedValue(this$static, quote_0){
  var buffer, builder, c, estimatedLength, l, len, p, start_0;
  buffer = this$static.buffer;
  builder = null;
  while (true) {
    p = this$static.pos;
    l = this$static.limit;
    start_0 = p;
    while (p < l) {
      c = buffer[p++];
      if (c == quote_0) {
        this$static.pos = p;
        len = p - start_0 - 1;
        if (!builder) {
          return valueOf_1(buffer, start_0, len);
        }
         else {
          builder.string += valueOf_1(buffer, start_0, len);
          return builder.string;
        }
      }
       else if (c == 92) {
        this$static.pos = p;
        len = p - start_0 - 1;
        if (!builder) {
          estimatedLength = (len + 1) * 2;
          builder = ($wnd.Math.max(estimatedLength, 16) , new StringBuilder_0);
        }
        builder.string += valueOf_1(buffer, start_0, len);
        $append(builder, $readEscapeCharacter(this$static));
        p = this$static.pos;
        l = this$static.limit;
        start_0 = p;
      }
       else if (c == 10) {
        ++this$static.lineNumber;
        this$static.lineStart = p;
      }
    }
    if (!builder) {
      estimatedLength = (p - start_0) * 2;
      builder = ($wnd.Math.max(estimatedLength, 16) , new StringBuilder_0);
    }
    builder.string += valueOf_1(buffer, start_0, p - start_0);
    this$static.pos = p;
    if (!$fillBuffer(this$static, 1)) {
      throw toJs($syntaxError(this$static, 'Unterminated string'));
    }
  }
}

function $nextString(this$static){
  var p, result;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 10) {
    result = $nextUnquotedValue(this$static);
  }
   else if (p == 8) {
    result = $nextQuotedValue(this$static, 39);
  }
   else if (p == 9) {
    result = $nextQuotedValue(this$static, 34);
  }
   else if (p == 11) {
    result = this$static.peekedString;
    this$static.peekedString = null;
  }
   else if (p == 15) {
    result = '' + toString_3(this$static.peekedLong);
  }
   else if (p == 16) {
    result = valueOf_1(this$static.buffer, this$static.pos, this$static.peekedNumberLength);
    this$static.pos += this$static.peekedNumberLength;
  }
   else {
    throw toJs(new IllegalStateException_0('Expected a string but was ' + $peek(this$static) + $locationString(this$static)));
  }
  this$static.peeked = 0;
  ++this$static.pathIndices[this$static.stackSize - 1];
  return result;
}

function $nextUnquotedValue(this$static){
  var builder, i, result;
  builder = null;
  i = 0;
  findNonLiteralCharacter: while (true) {
    for (; this$static.pos + i < this$static.limit; i++) {
      switch (this$static.buffer[this$static.pos + i]) {
        case 47:
        case 92:
        case 59:
        case 35:
        case 61:
          $checkLenient(this$static);
        case 123:
        case 125:
        case 91:
        case 93:
        case 58:
        case 44:
        case 32:
        case 9:
        case 12:
        case 13:
        case 10:
          break findNonLiteralCharacter;
      }
    }
    if (i < this$static.buffer.length) {
      if ($fillBuffer(this$static, i + 1)) {
        continue;
      }
       else {
        break;
      }
    }
    !builder && (builder = ($wnd.Math.max(i, 16) , new StringBuilder_0));
    $append_4(builder, this$static.buffer, this$static.pos, i);
    this$static.pos += i;
    i = 0;
    if (!$fillBuffer(this$static, 1)) {
      break;
    }
  }
  result = !builder?valueOf_1(this$static.buffer, this$static.pos, i):$append_4(builder, this$static.buffer, this$static.pos, i).string;
  this$static.pos += i;
  return result;
}

function $peek(this$static){
  var p;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  switch (p) {
    case 1:
      return $clinit_JsonToken() , BEGIN_OBJECT;
    case 2:
      return $clinit_JsonToken() , END_OBJECT;
    case 3:
      return $clinit_JsonToken() , BEGIN_ARRAY;
    case 4:
      return $clinit_JsonToken() , END_ARRAY;
    case 12:
    case 13:
    case 14:
      return $clinit_JsonToken() , NAME;
    case 5:
    case 6:
      return $clinit_JsonToken() , BOOLEAN;
    case 7:
      return $clinit_JsonToken() , NULL;
    case 8:
    case 9:
    case 10:
    case 11:
      return $clinit_JsonToken() , STRING;
    case 15:
    case 16:
      return $clinit_JsonToken() , NUMBER;
    case 17:
      return $clinit_JsonToken() , END_DOCUMENT;
    default:throw toJs(new AssertionError);
  }
}

function $peekKeyword(this$static){
  var c, i, keyword, keywordUpper, length_0, peeking;
  c = this$static.buffer[this$static.pos];
  if (c == 116 || c == 84) {
    keyword = 'true';
    keywordUpper = 'TRUE';
    peeking = 5;
  }
   else if (c == 102 || c == 70) {
    keyword = 'false';
    keywordUpper = 'FALSE';
    peeking = 6;
  }
   else if (c == 110 || c == 78) {
    keyword = 'null';
    keywordUpper = 'NULL';
    peeking = 7;
  }
   else {
    return 0;
  }
  length_0 = keyword.length;
  for (i = 1; i < length_0; i++) {
    if (this$static.pos + i >= this$static.limit && !$fillBuffer(this$static, i + 1)) {
      return 0;
    }
    c = this$static.buffer[this$static.pos + i];
    if (c != (checkCriticalStringElementIndex(i, keyword.length) , keyword.charCodeAt(i)) && c != (checkCriticalStringElementIndex(i, keywordUpper.length) , keywordUpper.charCodeAt(i))) {
      return 0;
    }
  }
  if ((this$static.pos + length_0 < this$static.limit || $fillBuffer(this$static, length_0 + 1)) && $isLiteral(this$static, this$static.buffer[this$static.pos + length_0])) {
    return 0;
  }
  this$static.pos += length_0;
  return this$static.peeked = peeking;
}

function $peekNumber(this$static){
  var buffer, c, fitsInLong, i, l, last, negative, newValue, p, value_0;
  buffer = this$static.buffer;
  p = this$static.pos;
  l = this$static.limit;
  value_0 = 0;
  negative = false;
  fitsInLong = true;
  last = 0;
  i = 0;
  charactersOfNumber: for (; true; i++) {
    if (p + i == l) {
      if (i == buffer.length) {
        return 0;
      }
      if (!$fillBuffer(this$static, i + 1)) {
        break;
      }
      p = this$static.pos;
      l = this$static.limit;
    }
    c = buffer[p + i];
    switch (c) {
      case 45:
        if (last == 0) {
          negative = true;
          last = 1;
          continue;
        }
         else if (last == 5) {
          last = 6;
          continue;
        }

        return 0;
      case 43:
        if (last == 5) {
          last = 6;
          continue;
        }

        return 0;
      case 101:
      case 69:
        if (last == 2 || last == 4) {
          last = 5;
          continue;
        }

        return 0;
      case 46:
        if (last == 2) {
          last = 3;
          continue;
        }

        return 0;
      default:if (c < 48 || c > 57) {
          if (!$isLiteral(this$static, c)) {
            break charactersOfNumber;
          }
          return 0;
        }

        if (last == 1 || last == 0) {
          value_0 = -(c - 48);
          last = 2;
        }
         else if (last == 2) {
          if (compare_0(value_0, 0) == 0) {
            return 0;
          }
          newValue = sub_1(mul_0(value_0, 10), c - 48);
          fitsInLong = fitsInLong & (gt(value_0, $intern_11) || eq(value_0, $intern_11) && compare_0(newValue, value_0) < 0);
          value_0 = newValue;
        }
         else 
          last == 3?(last = 4):(last == 5 || last == 6) && (last = 7);
    }
  }
  if (last == 2 && fitsInLong && (neq(value_0, {l:0, m:0, h:$intern_5}) || negative) && (compare_0(value_0, 0) != 0 || !negative)) {
    this$static.peekedLong = negative?value_0:neg_0(value_0);
    this$static.pos += i;
    return this$static.peeked = 15;
  }
   else if (last == 2 || last == 4 || last == 7) {
    this$static.peekedNumberLength = i;
    return this$static.peeked = 16;
  }
   else {
    return 0;
  }
}

function $push(this$static, newTop){
  var newPathIndices, newPathNames, newStack;
  if (this$static.stackSize == this$static.stack_0.length) {
    newStack = initUnidimensionalArray(I_classLit, $intern_10, 38, this$static.stackSize * 2, 15, 1);
    newPathIndices = initUnidimensionalArray(I_classLit, $intern_10, 38, this$static.stackSize * 2, 15, 1);
    newPathNames = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_0, 2, this$static.stackSize * 2, 6, 1);
    arraycopy(this$static.stack_0, 0, newStack, 0, this$static.stackSize);
    arraycopy(this$static.pathIndices, 0, newPathIndices, 0, this$static.stackSize);
    arraycopy(this$static.pathNames, 0, newPathNames, 0, this$static.stackSize);
    this$static.stack_0 = newStack;
    this$static.pathIndices = newPathIndices;
    this$static.pathNames = newPathNames;
  }
  this$static.stack_0[this$static.stackSize++] = newTop;
}

function $readEscapeCharacter(this$static){
  var c, end, escaped, i, result;
  if (this$static.pos == this$static.limit && !$fillBuffer(this$static, 1)) {
    throw toJs($syntaxError(this$static, 'Unterminated escape sequence'));
  }
  escaped = this$static.buffer[this$static.pos++];
  switch (escaped) {
    case 117:
      if (this$static.pos + 4 > this$static.limit && !$fillBuffer(this$static, 4)) {
        throw toJs($syntaxError(this$static, 'Unterminated escape sequence'));
      }

      result = 0;
      for (i = this$static.pos , end = i + 4; i < end; i++) {
        c = this$static.buffer[i];
        result = result << 4 & 65535;
        if (c >= 48 && c <= 57) {
          result = result + (c - 48) & 65535;
        }
         else if (c >= 97 && c <= 102) {
          result = result + (c - 97 + 10) & 65535;
        }
         else if (c >= 65 && c <= 70) {
          result = result + (c - 65 + 10) & 65535;
        }
         else {
          throw toJs(new NumberFormatException('\\u' + valueOf_1(this$static.buffer, this$static.pos, 4)));
        }
      }

      this$static.pos += 4;
      return result;
    case 116:
      return 9;
    case 98:
      return 8;
    case 110:
      return 10;
    case 114:
      return 13;
    case 102:
      return 12;
    case 10:
      ++this$static.lineNumber;
      this$static.lineStart = this$static.pos;
    case 39:
    case 34:
    case 92:
    case 47:
      return escaped;
    default:throw toJs($syntaxError(this$static, 'Invalid escape sequence'));
  }
}

function $skipQuotedValue(this$static, quote_0){
  var buffer, c, l, p;
  buffer = this$static.buffer;
  do {
    p = this$static.pos;
    l = this$static.limit;
    while (p < l) {
      c = buffer[p++];
      if (c == quote_0) {
        this$static.pos = p;
        return;
      }
       else if (c == 92) {
        this$static.pos = p;
        $readEscapeCharacter(this$static);
        p = this$static.pos;
        l = this$static.limit;
      }
       else if (c == 10) {
        ++this$static.lineNumber;
        this$static.lineStart = p;
      }
    }
    this$static.pos = p;
  }
   while ($fillBuffer(this$static, 1));
  throw toJs($syntaxError(this$static, 'Unterminated string'));
}

function $skipTo(this$static){
  var c, length_0;
  length_0 = '*/'.length;
  outer: for (; this$static.pos + length_0 <= this$static.limit || $fillBuffer(this$static, length_0); this$static.pos++) {
    if (this$static.buffer[this$static.pos] == 10) {
      ++this$static.lineNumber;
      this$static.lineStart = this$static.pos + 1;
      continue;
    }
    for (c = 0; c < length_0; c++) {
      if (this$static.buffer[this$static.pos + c] != (checkCriticalStringElementIndex(c, '*/'.length) , '*/'.charCodeAt(c))) {
        continue outer;
      }
    }
    return true;
  }
  return false;
}

function $skipToEndOfLine(this$static){
  var c;
  while (this$static.pos < this$static.limit || $fillBuffer(this$static, 1)) {
    c = this$static.buffer[this$static.pos++];
    if (c == 10) {
      ++this$static.lineNumber;
      this$static.lineStart = this$static.pos;
      break;
    }
     else if (c == 13) {
      break;
    }
  }
}

function $skipUnquotedValue(this$static){
  var i;
  do {
    i = 0;
    for (; this$static.pos + i < this$static.limit; i++) {
      switch (this$static.buffer[this$static.pos + i]) {
        case 47:
        case 92:
        case 59:
        case 35:
        case 61:
          $checkLenient(this$static);
        case 123:
        case 125:
        case 91:
        case 93:
        case 58:
        case 44:
        case 32:
        case 9:
        case 12:
        case 13:
        case 10:
          this$static.pos += i;
          return;
      }
    }
    this$static.pos += i;
  }
   while ($fillBuffer(this$static, 1));
}

function $skipValue(this$static){
  var count, p;
  count = 0;
  do {
    p = this$static.peeked;
    p == 0 && (p = $doPeek(this$static));
    if (p == 3) {
      $push(this$static, 1);
      ++count;
    }
     else if (p == 1) {
      $push(this$static, 3);
      ++count;
    }
     else if (p == 4) {
      --this$static.stackSize;
      --count;
    }
     else if (p == 2) {
      --this$static.stackSize;
      --count;
    }
     else 
      p == 14 || p == 10?$skipUnquotedValue(this$static):p == 8 || p == 12?$skipQuotedValue(this$static, 39):p == 9 || p == 13?$skipQuotedValue(this$static, 34):p == 16 && (this$static.pos += this$static.peekedNumberLength);
    this$static.peeked = 0;
  }
   while (count != 0);
  ++this$static.pathIndices[this$static.stackSize - 1];
  this$static.pathNames[this$static.stackSize - 1] = 'null';
}

function $syntaxError(this$static, message){
  throw toJs(new MalformedJsonException(message + $locationString(this$static)));
}

function JsonReader(in_0){
  $clinit_JsonReader();
  this.buffer = initUnidimensionalArray(C_classLit, $intern_10, 38, 1024, 15, 1);
  this.stack_0 = initUnidimensionalArray(I_classLit, $intern_10, 38, 32, 15, 1);
  this.stack_0[this.stackSize++] = 6;
  this.pathNames = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_0, 2, 32, 6, 1);
  this.pathIndices = initUnidimensionalArray(I_classLit, $intern_10, 38, 32, 15, 1);
  this.in_0 = in_0;
}

defineClass(252, 1, {}, JsonReader);
_.toString_0 = function toString_7(){
  return $ensureNamesAreInitialized(Lde_haumacher_msgbuf_json_JsonReader_2_classLit) , Lde_haumacher_msgbuf_json_JsonReader_2_classLit.simpleName + $locationString(this);
}
;
_.limit = 0;
_.lineNumber = 0;
_.lineStart = 0;
_.peeked = 0;
_.peekedLong = 0;
_.peekedNumberLength = 0;
_.pos = 0;
_.stackSize = 0;
var Lde_haumacher_msgbuf_json_JsonReader_2_classLit = createForClass('de.haumacher.msgbuf.json', 'JsonReader', 252);
function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(13, 1, {3:1, 20:1, 13:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, castTo(other, 13));
}
;
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode_0(this);
}
;
_.toString_0 = function toString_8(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 13);
function $clinit_JsonToken(){
  $clinit_JsonToken = emptyMethod;
  BEGIN_ARRAY = new JsonToken('BEGIN_ARRAY', 0);
  END_ARRAY = new JsonToken('END_ARRAY', 1);
  BEGIN_OBJECT = new JsonToken('BEGIN_OBJECT', 2);
  END_OBJECT = new JsonToken('END_OBJECT', 3);
  NAME = new JsonToken('NAME', 4);
  STRING = new JsonToken('STRING', 5);
  NUMBER = new JsonToken('NUMBER', 6);
  BOOLEAN = new JsonToken('BOOLEAN', 7);
  NULL = new JsonToken('NULL', 8);
  END_DOCUMENT = new JsonToken('END_DOCUMENT', 9);
}

function JsonToken(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_JsonToken();
  return stampJavaTypeInfo(getClassLiteralForArray(Lde_haumacher_msgbuf_json_JsonToken_2_classLit, 1), $intern_1, 33, 0, [BEGIN_ARRAY, END_ARRAY, BEGIN_OBJECT, END_OBJECT, NAME, STRING, NUMBER, BOOLEAN, NULL, END_DOCUMENT]);
}

defineClass(33, 13, {33:1, 3:1, 20:1, 13:1}, JsonToken);
var BEGIN_ARRAY, BEGIN_OBJECT, BOOLEAN, END_ARRAY, END_DOCUMENT, END_OBJECT, NAME, NULL, NUMBER, STRING;
var Lde_haumacher_msgbuf_json_JsonToken_2_classLit = createForEnum('de.haumacher.msgbuf.json', 'JsonToken', 33, values_0);
function $clinit_JsonWriter(){
  $clinit_JsonWriter = emptyMethod;
  var hex, i, number;
  REPLACEMENT_CHARS = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_0, 2, 128, 6, 1);
  for (i = 0; i <= 31; i++) {
    hex = (number = i >>> 0 , number.toString(16));
    hex = $substring_0('0000', 0, 4 - hex.length) + ('' + hex);
    REPLACEMENT_CHARS[i] = '\\u' + hex;
  }
  REPLACEMENT_CHARS[34] = '\\"';
  REPLACEMENT_CHARS[92] = '\\\\';
  REPLACEMENT_CHARS[9] = '\\t';
  REPLACEMENT_CHARS[8] = '\\b';
  REPLACEMENT_CHARS[10] = '\\n';
  REPLACEMENT_CHARS[13] = '\\r';
  REPLACEMENT_CHARS[12] = '\\f';
  HTML_SAFE_REPLACEMENT_CHARS = clone(REPLACEMENT_CHARS);
  HTML_SAFE_REPLACEMENT_CHARS[60] = '\\u003c';
  HTML_SAFE_REPLACEMENT_CHARS[62] = '\\u003e';
  HTML_SAFE_REPLACEMENT_CHARS[38] = '\\u0026';
  HTML_SAFE_REPLACEMENT_CHARS[61] = '\\u003d';
  HTML_SAFE_REPLACEMENT_CHARS[39] = '\\u0027';
}

function $beforeName(this$static){
  var context;
  context = $peek_0(this$static);
  if (context == 5) {
    $append(this$static.out._buffer, 44);
  }
   else if (context != 3) {
    throw toJs(new IllegalStateException_0('Nesting problem.'));
  }
  this$static.stack_0[this$static.stackSize - 1] = 4;
}

function $beforeValue(this$static){
  switch ($peek_0(this$static)) {
    case 7:
      if (!this$static.lenient) {
        throw toJs(new IllegalStateException_0('JSON must have only one top-level value.'));
      }

    case 6:
      this$static.stack_0[this$static.stackSize - 1] = 7;
      break;
    case 1:
      this$static.stack_0[this$static.stackSize - 1] = 2;
      break;
    case 2:
      $append(this$static.out._buffer, 44);
      break;
    case 4:
      $write(this$static.out, this$static.separator);
      this$static.stack_0[this$static.stackSize - 1] = 5;
      break;
    default:throw toJs(new IllegalStateException_0('Nesting problem.'));
  }
}

function $close(this$static, empty, nonempty, closeBracket){
  var context;
  context = $peek_0(this$static);
  if (context != nonempty && context != empty) {
    throw toJs(new IllegalStateException_0('Nesting problem.'));
  }
  if (this$static.deferredName != null) {
    throw toJs(new IllegalStateException_0('Dangling name: ' + this$static.deferredName));
  }
  --this$static.stackSize;
  $write(this$static.out, closeBracket);
  return this$static;
}

function $name_0(this$static, name_0){
  if (this$static.deferredName != null) {
    throw toJs(new IllegalStateException);
  }
  if (this$static.stackSize == 0) {
    throw toJs(new IllegalStateException_0('JsonWriter is closed.'));
  }
  this$static.deferredName = name_0;
  return this$static;
}

function $nullValue(this$static){
  if (this$static.deferredName != null) {
    if (this$static.serializeNulls) {
      $writeDeferredName(this$static);
    }
     else {
      this$static.deferredName = null;
      return this$static;
    }
  }
  $beforeValue(this$static);
  $write(this$static.out, 'null');
  return this$static;
}

function $open(this$static, empty, openBracket){
  $beforeValue(this$static);
  $push_0(this$static, empty);
  $write(this$static.out, openBracket);
  return this$static;
}

function $peek_0(this$static){
  if (this$static.stackSize == 0) {
    throw toJs(new IllegalStateException_0('JsonWriter is closed.'));
  }
  return this$static.stack_0[this$static.stackSize - 1];
}

function $push_0(this$static, newTop){
  var newStack;
  if (this$static.stackSize == this$static.stack_0.length) {
    newStack = initUnidimensionalArray(I_classLit, $intern_10, 38, this$static.stackSize * 2, 15, 1);
    arraycopy(this$static.stack_0, 0, newStack, 0, this$static.stackSize);
    this$static.stack_0 = newStack;
  }
  this$static.stack_0[this$static.stackSize++] = newTop;
}

function $string(this$static, value_0){
  var c, i, last, length_0, replacement, replacements;
  replacements = this$static.htmlSafe?HTML_SAFE_REPLACEMENT_CHARS:REPLACEMENT_CHARS;
  $write(this$static.out, '"');
  last = 0;
  length_0 = value_0.length;
  for (i = 0; i < length_0; i++) {
    c = (checkCriticalStringElementIndex(i, value_0.length) , value_0.charCodeAt(i));
    if (c < 128) {
      replacement = replacements[c];
      if (replacement == null) {
        continue;
      }
    }
     else if (c == 8232) {
      replacement = '\\u2028';
    }
     else if (c == 8233) {
      replacement = '\\u2029';
    }
     else {
      continue;
    }
    last < i && $write_0(this$static.out, value_0, last, i - last);
    $write(this$static.out, replacement);
    last = i + 1;
  }
  last < length_0 && $write_0(this$static.out, value_0, last, length_0 - last);
  $write(this$static.out, '"');
}

function $value(this$static, value_0){
  if (value_0 == null) {
    return $nullValue(this$static);
  }
  $writeDeferredName(this$static);
  $beforeValue(this$static);
  $string(this$static, value_0);
  return this$static;
}

function $writeDeferredName(this$static){
  if (this$static.deferredName != null) {
    $beforeName(this$static);
    $string(this$static, this$static.deferredName);
    this$static.deferredName = null;
  }
}

function JsonWriter(out){
  $clinit_JsonWriter();
  this.stack_0 = initUnidimensionalArray(I_classLit, $intern_10, 38, 32, 15, 1);
  $push_0(this, 6);
  this.out = out;
}

function clone(s){
  var result;
  result = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_0, 2, s.length, 6, 1);
  arraycopy(s, 0, result, 0, s.length);
  return result;
}

defineClass(131, 1, {}, JsonWriter);
_.htmlSafe = false;
_.lenient = false;
_.separator = ':';
_.serializeNulls = true;
_.stackSize = 0;
var HTML_SAFE_REPLACEMENT_CHARS, REPLACEMENT_CHARS;
var Lde_haumacher_msgbuf_json_JsonWriter_2_classLit = createForClass('de.haumacher.msgbuf.json', 'JsonWriter', 131);
function IOException(message){
  Exception.call(this, message);
}

defineClass(46, 80, $intern_12, IOException);
var Ljava_io_IOException_2_classLit = createForClass('java.io', 'IOException', 46);
function MalformedJsonException(msg){
  IOException.call(this, msg);
}

defineClass(308, 46, $intern_12, MalformedJsonException);
var Lde_haumacher_msgbuf_json_MalformedJsonException_2_classLit = createForClass('de.haumacher.msgbuf.json', 'MalformedJsonException', 308);
function $asList(this$static){
  var asArray;
  asArray = this$static;
  return new Arrays$ArrayList(asArray);
}

function $clinit_Node(){
  $clinit_Node = emptyMethod;
  ELEMENT_NODE = $wnd.Node.ELEMENT_NODE;
}

var ELEMENT_NODE = 0;
function $forEach_3(this$static, cb){
  forEach(this$static, cb);
}

function $clinit_DomGlobal(){
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.goog.global.document;
}

var document_0;
function $clinit_SVGLength(){
  $clinit_SVGLength = emptyMethod;
  SVG_LENGTHTYPE_PX = $wnd.SVGLength.SVG_LENGTHTYPE_PX;
}

var SVG_LENGTHTYPE_PX = 0;
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(103, 1, {158:1});
_.toString_0 = function toString_9(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 103);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(209, 15, $intern_2, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 209);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(47, 15, $intern_2, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 47);
function ArrayIndexOutOfBoundsException(msg){
  IndexOutOfBoundsException_0.call(this, msg);
}

defineClass(150, 47, $intern_2, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 150);
function ArrayStoreException(){
  RuntimeException.call(this);
}

function ArrayStoreException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(142, 15, $intern_2, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 142);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

function $booleanValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

function $compareTo_0(this$static, b){
  return compare_1((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function compare_1(x_0, y_0){
  $clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  $clinit_Boolean();
  return instanceOfString(this$static)?$compareTo_3(this$static, castToString(other)):instanceOfDouble(this$static)?$compareTo_1(this$static, (checkCriticalType(other == null || instanceOfDouble(other)) , other)):instanceOfBoolean(this$static)?$compareTo_0(this$static, castToBoolean(other)):this$static.compareTo(other);
}

booleanCastMap = {3:1, 176:1, 20:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 176);
function digit(c){
  if (c >= 48 && c < 48 + $wnd.Math.min(10, 10)) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(177, 15, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 177);
function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 45 || (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 43))?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit((checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i))) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(102, 1, {3:1, 102:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 102);
function $compareTo_1(this$static, b){
  return compare_2((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function $doubleValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

function compare_2(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return x_0 == 0?compare_2(1 / x_0, 1 / y_0):0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

doubleCastMap = {3:1, 20:1, 175:1, 102:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 175);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(81, 15, $intern_2, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 81);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(26, 15, $intern_2, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 26);
function $compareTo_2(this$static, b){
  return compare_3(this$static.value_0, b.value_0);
}

function Integer(value_0){
  this.value_0 = value_0;
}

function compare_3(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(54, 102, {3:1, 20:1, 54:1, 102:1}, Integer);
_.compareTo = function compareTo_0(b){
  return $compareTo_2(this, castTo(b, 54));
}
;
_.equals_0 = function equals_1(o){
  return instanceOf(o, 54) && castTo(o, 54).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_2(){
  return this.value_0;
}
;
_.toString_0 = function toString_11(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 54);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_0, 54, 256, 0, 1);
}

var boxedValues;
function $forEach(this$static, action){
  var t, t$iterator;
  checkCriticalNotNull(action);
  for (t$iterator = this$static.iterator(); t$iterator.hasNext_0();) {
    t = t$iterator.next_1();
    action.accept(t);
  }
}

defineClass(488, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(105, 104, $intern_2, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 105);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(79, 81, $intern_2, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 79);
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $compareTo_3(this$static, other){
  var a, b;
  a = (checkCriticalNotNull(this$static) , this$static);
  b = (checkCriticalNotNull(other) , other);
  return a == b?0:a < b?-1:1;
}

function $equals_0(this$static, other){
  return checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other);
}

function $equalsIgnoreCase(other){
  checkCriticalNotNull('true');
  if (other == null) {
    return false;
  }
  if ($equals_0('true', other)) {
    return true;
  }
  return 'true'.length == other.length && $equals_0('true'.toLowerCase(), other.toLowerCase());
}

function $getChars(this$static, srcBegin, srcEnd, dst, dstBegin){
  checkCriticalStringBounds(srcBegin, srcEnd, this$static.length);
  checkCriticalStringBounds(dstBegin, dstBegin + (srcEnd - srcBegin), dst.length);
  $getChars0(this$static, srcBegin, srcEnd, dst, dstBegin);
}

function $getChars0(this$static, srcBegin, srcEnd, dst, dstBegin){
  while (srcBegin < srcEnd) {
    dst[dstBegin++] = $charAt(this$static, srcBegin++);
  }
}

function $replace(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $split(this$static){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp(' ', 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_0, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '') {
      out[count] = trail;
      break;
    }
     else {
      matchIndex = matchObj.index;
      out[count] = trail.substr(0, matchIndex);
      trail = $substring_0(trail, matchIndex + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty);
  }
  return out;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && (checkCriticalStringElementIndex(start_0, this$static.length) , this$static.charCodeAt(start_0) <= 32)) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && (checkCriticalStringElementIndex(end - 1, this$static.length) , this$static.charCodeAt(end - 1) <= 32)) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    checkCriticalStringElementIndex(pos + 1, replaceStr.length);
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

function valueOf_0(x_0){
  return x_0 == null?'null':toString_4(x_0);
}

function valueOf_1(x_0, offset, count){
  var batchEnd, batchStart, end, s;
  end = offset + count;
  checkCriticalStringBounds(offset, end, x_0.length);
  s = '';
  for (batchStart = offset; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = {3:1, 158:1, 20:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append(this$static, x_0){
  this$static.string += String.fromCharCode(x_0);
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_2(this$static, x_0, start_0, end){
  this$static.string += '' + (x_0 == null?'null':x_0).substr(start_0, end - start_0);
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_4(this$static, x_0, start_0, len){
  this$static.string += valueOf_1(x_0, start_0, len);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(55, 103, {158:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 55);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(138, 47, $intern_2, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 138);
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
    srcArray = castToArray(src_0);
    destArray = castToArray(dest);
    if (src_0 === dest && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else 
    len > 0 && copy(src_0, srcOfs, dest, destOfs, len, true);
}

defineClass(492, 1, {});
function Throwable$lambda$0$Type(){
}

defineClass(157, 1, {}, Throwable$lambda$0$Type);
var Ljava_lang_Throwable$lambda$0$Type_2_classLit = createForClass('java.lang', 'Throwable/lambda$0$Type', 157);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(94, 15, $intern_2, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 94);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
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
    e = e$iterator.next_1();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $removeAll(this$static, c){
  var changed, iter, o;
  checkCriticalNotNull(c);
  changed = false;
  for (iter = new ArrayList$1(this$static); iter.i < iter.this$01.array.length;) {
    o = $next_0(iter);
    if ($indexOf_0(c, o, 0) != -1) {
      $remove_4(iter);
      changed = true;
    }
  }
  return changed;
}

defineClass(392, 1, {29:1});
_.spliterator_0 = function spliterator_0(){
  return new Spliterators$IteratorSpliterator(this, 0);
}
;
_.stream = function stream(){
  return new StreamImpl(null, this.spliterator_0());
}
;
_.add_0 = function add_0(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toArray = function toArray(){
  return this.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, this.size_1(), 5, 1));
}
;
_.toArray_0 = function toArray_0(a){
  var i, it, result, size_0;
  size_0 = this.size_1();
  a.length < size_0 && (a = stampJavaTypeInfo_1(new Array(size_0), a));
  result = a;
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(result, i, it.next_1());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}
;
_.toString_0 = function toString_12(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_3(joiner, e === this?'(this Collection)':e == null?'null':toString_4(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 392);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_0(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = this$static.entrySet().iterator(); iter.hasNext_0();) {
    entry = castTo(iter.next_1(), 23);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_0(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_4(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(397, 1, {101:1});
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals_0 = function equals_2(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 101)) {
    return false;
  }
  otherMap = castTo(obj, 101);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 23);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_0(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode_0 = function hashCode_3(){
  return hashCode_9(this.entrySet());
}
;
_.size_1 = function size_1(){
  return this.entrySet().size_1();
}
;
_.toString_0 = function toString_13(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 23);
    $add_3(joiner, $toString_0(this, entry.getKey()) + '=' + $toString_0(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 397);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0){
  return $containsValue_0(this$static, value_0, this$static.stringMap) || $containsValue_0(this$static, value_0, this$static.hashCodeMap);
}

function $containsValue_0(this$static, value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 23);
    if (this$static.equals_1(value_0, entry.getValue())) {
      return true;
    }
  }
  return false;
}

function $get(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_1(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_1(this$static.stringMap, key);
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

function $remove(this$static, key){
  return instanceOfString(key)?$removeStringValue(this$static, key):$remove_5(this$static.hashCodeMap, key);
}

function $removeStringValue(this$static, key){
  return key == null?$remove_5(this$static.hashCodeMap, null):$remove_6(this$static.stringMap, key);
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(243, 397, {101:1});
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_1(key){
  return $get(this, key);
}
;
_.put = function put(key, value_0){
  return $put(this, key, value_0);
}
;
_.size_1 = function size_2(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 243);
defineClass(396, 392, $intern_13);
_.spliterator_0 = function spliterator_1(){
  return new Spliterators$IteratorSpliterator(this, 1);
}
;
_.equals_0 = function equals_3(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 50)) {
    return false;
  }
  other = castTo(o, 50);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_4(){
  return hashCode_9(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 396);
function $contains(this$static, o){
  if (instanceOf(o, 23)) {
    return $containsEntry(this$static.this$01, castTo(o, 23));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(87, 396, $intern_13, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_0(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 87);
function $forEachRemaining(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.hasNext_0()) {
    consumer.accept(this$static.next_1());
  }
}

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
  rv = castTo(this$static.current.next_1(), 23);
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

defineClass(88, 1, {}, AbstractHashMap$EntrySetIterator);
_.forEachRemaining = function forEachRemaining(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_0(){
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
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 88);
function $indexOf(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.array.length; i < n; ++i) {
    if (equals_9(toFind, (checkCriticalElementIndex(i, this$static.array.length) , this$static.array[i]))) {
      return i;
    }
  }
  return -1;
}

defineClass(393, 392, $intern_14);
_.spliterator_0 = function spliterator_2(){
  return new Spliterators$IteratorSpliterator(this, 16);
}
;
_.add_1 = function add_1(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_2(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_4(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 43)) {
    return false;
  }
  other = castTo(o, 43);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_5(){
  return hashCode_10(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_1 = function remove_0(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 393);
function $remove_1(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01_0.remove_1(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(82, 1, {}, AbstractList$IteratorImpl);
_.forEachRemaining = function forEachRemaining_0(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_1(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_1(this.last = this.i++);
}
;
_.remove_0 = function remove_1(){
  $remove_1(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 82);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(178, 82, {}, AbstractList$ListIteratorImpl);
_.remove_0 = function remove_2(){
  $remove_1(this);
}
;
_.add_2 = function add_3(o){
  this.this$01.add_1(this.i, o);
  ++this.i;
  this.last = -1;
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 178);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(68, 396, $intern_13, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return this.this$01.containsKey(key);
}
;
_.iterator = function iterator_2(){
  var outerIter;
  return outerIter = this.this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_4(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 68);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(56, 1, {}, AbstractMap$1$1);
_.forEachRemaining = function forEachRemaining_1(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.val$outerIter2.hasNext_0();
}
;
_.next_1 = function next_2(){
  var entry;
  return entry = castTo(this.val$outerIter2.next_1(), 23) , entry.getKey();
}
;
_.remove_0 = function remove_3(){
  this.val$outerIter2.remove_0();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 56);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(107, 392, {29:1}, AbstractMap$2);
_.contains_0 = function contains_2(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.iterator = function iterator_3(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$2$1(outerIter);
}
;
_.size_1 = function size_5(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 107);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(97, 1, {}, AbstractMap$2$1);
_.forEachRemaining = function forEachRemaining_2(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_3(){
  var entry;
  return entry = $next(this.val$outerIter2) , entry.getValue();
}
;
_.remove_0 = function remove_4(){
  $remove_0(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 97);
function $setValue(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(210, 1, $intern_15);
_.equals_0 = function equals_5(other){
  var entry;
  if (!instanceOf(other, 23)) {
    return false;
  }
  entry = castTo(other, 23);
  return equals_9(this.key_0, entry.getKey()) && equals_9(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_6(){
  return hashCode_11(this.key_0) ^ hashCode_11(this.value_0);
}
;
_.setValue = function setValue(value_0){
  return $setValue(this, value_0);
}
;
_.toString_0 = function toString_14(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 210);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(143, 210, $intern_15, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 143);
defineClass(399, 1, $intern_15);
_.equals_0 = function equals_6(other){
  var entry;
  if (!instanceOf(other, 23)) {
    return false;
  }
  entry = castTo(other, 23);
  return equals_9(this.val$entry2.value[0], entry.getKey()) && equals_9($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_7(){
  return hashCode_11(this.val$entry2.value[0]) ^ hashCode_11($getValue(this));
}
;
_.toString_0 = function toString_15(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 399);
defineClass(398, 393, $intern_14);
_.add_1 = function add_4(index_0, element){
  var iter;
  iter = this.listIterator(index_0);
  iter.add_2(element);
}
;
_.get_1 = function get_2(index_0){
  var iter;
  iter = this.listIterator(index_0);
  try {
    return iter.next_1();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 98)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't get element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
_.iterator = function iterator_4(){
  return this.listIterator(0);
}
;
_.remove_1 = function remove_5(index_0){
  var iter, old;
  iter = this.listIterator(index_0);
  try {
    old = iter.next_1();
    iter.remove_0();
    return old;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 98)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't remove element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 398);
function $$init(this$static){
  this$static.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
}

function $add(this$static, index_0, o){
  checkCriticalPositionIndex(index_0, this$static.array.length);
  insertTo(this$static.array, index_0, o);
}

function $add_0(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll(this$static, c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $forEach_0(this$static, consumer){
  var e, e$array, e$index, e$max;
  checkCriticalNotNull(consumer);
  for (e$array = this$static.array , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    consumer.accept(e);
  }
}

function $get_0(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_9(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_2(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0);
  return previous;
}

function $remove_3(this$static, o){
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
  $$init(this);
}

function ArrayList_0(c){
  $$init(this);
  insertTo_0(this.array, 0, clone_0(c.array, c.array.length));
}

defineClass(14, 393, $intern_16, ArrayList, ArrayList_0);
_.add_1 = function add_5(index_0, o){
  $add(this, index_0, o);
}
;
_.add_0 = function add_6(o){
  return $add_0(this, o);
}
;
_.contains_0 = function contains_3(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.get_1 = function get_3(index_0){
  return $get_0(this, index_0);
}
;
_.iterator = function iterator_5(){
  return new ArrayList$1(this);
}
;
_.remove_1 = function remove_6(index_0){
  return $remove_2(this, index_0);
}
;
_.size_1 = function size_6(){
  return this.array.length;
}
;
_.toArray = function toArray_1(){
  return clone_0(this.array, this.array.length);
}
;
_.toArray_0 = function toArray_2(out){
  var i, size_0;
  size_0 = this.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 14);
function $next_0(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function $remove_4(this$static){
  checkCriticalState(this$static.last != -1);
  $remove_2(this$static.this$01, this$static.i = this$static.last);
  this$static.last = -1;
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(48, 1, {}, ArrayList$1);
_.forEachRemaining = function forEachRemaining_3(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_3(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_4(){
  return $next_0(this);
}
;
_.remove_0 = function remove_7(){
  $remove_4(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 48);
function hashCode_8(a){
  var e, e$array, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$array = a , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

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

function spliterator_3(array, endExclusive){
  return checkCriticalArrayBounds(endExclusive, array.length) , new Spliterators$ArraySpliterator(array, endExclusive);
}

function stream_0(array){
  return new StreamImpl(null, spliterator_3(array, array.length));
}

function $forEach_1(this$static, consumer){
  var e, e$array, e$index, e$max;
  checkCriticalNotNull(consumer);
  for (e$array = this$static.array , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    consumer.accept(e);
  }
}

function $toArray(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
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

defineClass(17, 393, $intern_16, Arrays$ArrayList);
_.contains_0 = function contains_4(o){
  return $indexOf(this, o) != -1;
}
;
_.get_1 = function get_4(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.size_1 = function size_7(){
  return this.array.length;
}
;
_.toArray = function toArray_3(){
  return $toArray(this, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, this.array.length, 5, 1));
}
;
_.toArray_0 = function toArray_4(out){
  return $toArray(this, out);
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 17);
function hashCode_9(collection){
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_10(list){
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
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
function Collections$SingletonList(element){
  this.element = element;
}

defineClass(106, 393, $intern_16, Collections$SingletonList);
_.contains_0 = function contains_5(item_0){
  return equals_9(this.element, item_0);
}
;
_.get_1 = function get_5(index_0){
  checkCriticalElementIndex(index_0, 1);
  return this.element;
}
;
_.size_1 = function size_8(){
  return 1;
}
;
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 106);
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

defineClass(322, 1, $intern_10, Comparators$NaturalOrderComparator);
_.compare = function compare_4(a, b){
  return $compare(castTo(a, 20), castTo(b, 20));
}
;
_.equals_0 = function equals_7(other){
  return this === other;
}
;
var Ljava_util_Comparators$NaturalOrderComparator_2_classLit = createForClass('java.util', 'Comparators/NaturalOrderComparator', 322);
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

defineClass(323, 15, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 323);
defineClass(401, 396, $intern_13);
var Ljava_util_EnumSet_2_classLit = createForClass('java.util', 'EnumSet', 401);
function $add_1(this$static, e){
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

defineClass(154, 401, $intern_13, EnumSet$EnumSetImpl);
_.add_0 = function add_7(e){
  return $add_1(this, castTo(e, 13));
}
;
_.contains_0 = function contains_6(o){
  return instanceOf(o, 13) && $containsEnum(this, castTo(o, 13));
}
;
_.iterator = function iterator_6(){
  return new EnumSet$EnumSetImpl$IteratorImpl(this);
}
;
_.size_1 = function size_9(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_EnumSet$EnumSetImpl_2_classLit = createForClass('java.util', 'EnumSet/EnumSetImpl', 154);
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

defineClass(374, 1, {}, EnumSet$EnumSetImpl$IteratorImpl);
_.forEachRemaining = function forEachRemaining_4(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_5(){
  return checkCriticalElement(this.i < this.this$11.all.length) , this.last = this.i , $findNext(this) , this.this$11.set_0[this.last];
}
;
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$11.all.length;
}
;
_.remove_0 = function remove_8(){
  checkCriticalState(this.last != -1);
  setCheck(this.this$11.set_0, this.last, null);
  --this.this$11.size_0;
  this.last = -1;
}
;
_.i = -1;
_.last = -1;
var Ljava_util_EnumSet$EnumSetImpl$IteratorImpl_2_classLit = createForClass('java.util', 'EnumSet/EnumSetImpl/IteratorImpl', 374);
function HashMap(){
  this.hashCodeMap = new InternalHashCodeMap(this);
  this.stringMap = new InternalStringMap(this);
  structureChanged(this);
}

defineClass(35, 243, $intern_17, HashMap);
_.equals_1 = function equals_8(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 35);
function $add_2(this$static, o){
  var old;
  old = this$static.map_0.put(o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return this$static.map_0.containsKey(o);
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(map_0){
  this.map_0 = map_0;
}

defineClass(153, 396, $intern_18, HashSet);
_.add_0 = function add_8(o){
  return $add_2(this, o);
}
;
_.contains_0 = function contains_7(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_7(){
  var outerIter;
  return outerIter = (new AbstractMap$1(this.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_10(){
  return this.map_0.size_1();
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 153);
function $findEntryInChain(this$static, key, chain){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = chain , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.host.equals_1(key, entry.getKey())) {
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
  return $findEntryInChain(this$static, key, $getChainOrEmpty(this$static, key == null?0:this$static.host.getHashCode(key)));
}

function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode;
  hashCode = key == null?0:this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode, chain0);
  }
   else {
    entry = $findEntryInChain(this$static, key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_5(this$static, key){
  var chain, chain0, entry, hashCode, i;
  hashCode = key == null?0:this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?new Array:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (this$static.host.equals_1(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete(this$static.backingMap, hashCode);
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

defineClass(254, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_8(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 254);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(145, 1, {}, InternalHashCodeMap$1);
_.forEachRemaining = function forEachRemaining_5(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_6(){
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
_.remove_0 = function remove_9(){
  $remove_5(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 145);
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

function $get_1(this$static, key){
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

function $remove_6(this$static, key){
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

defineClass(255, 1, {}, InternalStringMap);
_.iterator = function iterator_9(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 255);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(146, 1, {}, InternalStringMap$1);
_.forEachRemaining = function forEachRemaining_6(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_7(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_6(){
  return !this.current.done;
}
;
_.remove_0 = function remove_10(){
  $remove_6(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 146);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_1(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(256, 399, $intern_15, InternalStringMap$2);
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
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 256);
function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    $remove_7(entry);
    $addToEnd(entry);
  }
}

function LinkedHashMap(){
  HashMap.call(this);
  this.head = new LinkedHashMap$ChainEntry(this);
  this.map_0 = new HashMap;
  this.head.prev = this.head;
  this.head.next_0 = this.head;
}

defineClass(371, 35, $intern_17, LinkedHashMap);
_.containsKey = function containsKey_1(key){
  return $containsKey(this.map_0, key);
}
;
_.entrySet = function entrySet_0(){
  return new LinkedHashMap$EntrySet(this);
}
;
_.get_0 = function get_6(key){
  var entry;
  entry = castTo($get(this.map_0, key), 76);
  if (entry) {
    $recordAccess(this, entry);
    return entry.value_0;
  }
  return null;
}
;
_.put = function put_0(key, value_0){
  var newEntry, old, oldValue;
  old = castTo($get(this.map_0, key), 76);
  if (!old) {
    newEntry = new LinkedHashMap$ChainEntry_0(this, key, value_0);
    $put(this.map_0, key, newEntry);
    $addToEnd(newEntry);
    return null;
  }
   else {
    oldValue = $setValue(old, value_0);
    $recordAccess(this, old);
    return oldValue;
  }
}
;
_.size_1 = function size_11(){
  return $size(this.map_0);
}
;
_.accessOrder = false;
var Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', 371);
function $addToEnd(this$static){
  var tail;
  tail = this$static.this$01.head.prev;
  this$static.prev = tail;
  this$static.next_0 = this$static.this$01.head;
  tail.next_0 = this$static.this$01.head.prev = this$static;
}

function $remove_7(this$static){
  this$static.next_0.prev = this$static.prev;
  this$static.prev.next_0 = this$static.next_0;
  this$static.next_0 = this$static.prev = null;
}

function LinkedHashMap$ChainEntry(this$0){
  LinkedHashMap$ChainEntry_0.call(this, this$0, null, null);
}

function LinkedHashMap$ChainEntry_0(this$0, key, value_0){
  this.this$01 = this$0;
  AbstractMap$SimpleEntry.call(this, key, value_0);
}

defineClass(76, 143, {76:1, 23:1}, LinkedHashMap$ChainEntry, LinkedHashMap$ChainEntry_0);
var Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util', 'LinkedHashMap/ChainEntry', 76);
function $contains_2(this$static, o){
  if (instanceOf(o, 23)) {
    return $containsEntry(this$static.this$01, castTo(o, 23));
  }
  return false;
}

function LinkedHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(372, 396, $intern_13, LinkedHashMap$EntrySet);
_.contains_0 = function contains_8(o){
  return $contains_2(this, o);
}
;
_.iterator = function iterator_10(){
  return new LinkedHashMap$EntrySet$EntryIterator(this);
}
;
_.size_1 = function size_12(){
  return $size(this.this$01.map_0);
}
;
var Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet', 372);
function LinkedHashMap$EntrySet$EntryIterator(this$1){
  this.this$11 = this$1;
  this.next_0 = this$1.this$01.head.next_0;
  recordLastKnownStructure(this$1.this$01.map_0, this);
}

defineClass(373, 1, {}, LinkedHashMap$EntrySet$EntryIterator);
_.forEachRemaining = function forEachRemaining_7(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_8(){
  return checkStructuralChange(this.this$11.this$01.map_0, this) , checkCriticalElement(this.next_0 != this.this$11.this$01.head) , this.last = this.next_0 , this.next_0 = this.next_0.next_0 , this.last;
}
;
_.hasNext_0 = function hasNext_7(){
  return this.next_0 != this.this$11.this$01.head;
}
;
_.remove_0 = function remove_11(){
  checkCriticalState(!!this.last);
  checkStructuralChange(this.this$11.this$01.map_0, this);
  $remove_7(this.last);
  $remove(this.this$11.this$01.map_0, this.last.key_0);
  recordLastKnownStructure(this.this$11.this$01.map_0, this);
  this.last = null;
}
;
var Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet/EntryIterator', 373);
function LinkedHashSet(){
  HashSet_0.call(this, new LinkedHashMap);
}

defineClass(370, 153, $intern_18, LinkedHashSet);
var Ljava_util_LinkedHashSet_2_classLit = createForClass('java.util', 'LinkedHashSet', 370);
function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next_0 = next;
  next.prev = prev.next_0 = node;
  ++this$static.size_0;
}

function $removeNode(this$static, node){
  var oldValue;
  oldValue = node.value_0;
  node.next_0.prev = node.prev;
  node.prev.next_0 = node.next_0;
  node.next_0 = node.prev = null;
  node.value_0 = null;
  --this$static.size_0;
  return oldValue;
}

function LinkedList(){
  this.header = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  this.header.next_0 = this.tail;
  this.tail.prev = this.header;
  this.header.prev = this.tail.next_0 = null;
  this.size_0 = 0;
}

defineClass(244, 398, $intern_16, LinkedList);
_.add_0 = function add_9(o){
  $addNode(this, o, this.tail.prev, this.tail);
  return true;
}
;
_.listIterator = function listIterator_0(index_0){
  var i, node;
  checkCriticalPositionIndex(index_0, this.size_0);
  if (index_0 >= this.size_0 >> 1) {
    node = this.tail;
    for (i = this.size_0; i > index_0; --i) {
      node = node.prev;
    }
  }
   else {
    node = this.header.next_0;
    for (i = 0; i < index_0; ++i) {
      node = node.next_0;
    }
  }
  return new LinkedList$ListIteratorImpl(this, index_0, node);
}
;
_.size_1 = function size_13(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 244);
function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode_0 = startNode;
  this.currentIndex = index_0;
}

defineClass(245, 1, {}, LinkedList$ListIteratorImpl);
_.forEachRemaining = function forEachRemaining_8(consumer){
  $forEachRemaining(this, consumer);
}
;
_.add_2 = function add_10(o){
  $addNode(this.this$01, o, this.currentNode_0.prev, this.currentNode_0);
  ++this.currentIndex;
  this.lastNode = null;
}
;
_.hasNext_0 = function hasNext_8(){
  return this.currentNode_0 != this.this$01.tail;
}
;
_.next_1 = function next_9(){
  checkCriticalElement(this.currentNode_0 != this.this$01.tail);
  this.lastNode = this.currentNode_0;
  this.currentNode_0 = this.currentNode_0.next_0;
  ++this.currentIndex;
  return this.lastNode.value_0;
}
;
_.remove_0 = function remove_12(){
  var nextNode;
  checkCriticalState(!!this.lastNode);
  nextNode = this.lastNode.next_0;
  $removeNode(this.this$01, this.lastNode);
  this.currentNode_0 == this.lastNode?(this.currentNode_0 = nextNode):--this.currentIndex;
  this.lastNode = null;
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 245);
function LinkedList$Node(){
}

defineClass(109, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 109);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(98, 15, {3:1, 15:1, 12:1, 98:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 98);
function equals_9(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_11(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function requireNonNull(obj){
  if (obj == null) {
    throw toJs(new NullPointerException_0('element required'));
  }
  return obj;
}

function $clinit_Optional(){
  $clinit_Optional = emptyMethod;
  EMPTY = new Optional(null);
}

function $ifPresent(this$static, consumer){
  this$static.ref != null && consumer.accept(this$static.ref);
}

function Optional(ref){
  $clinit_Optional();
  this.ref = ref;
}

defineClass(59, 1, {59:1}, Optional);
_.equals_0 = function equals_10(obj){
  var other;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 59)) {
    return false;
  }
  other = castTo(obj, 59);
  return equals_9(this.ref, other.ref);
}
;
_.hashCode_0 = function hashCode_12(){
  return hashCode_11(this.ref);
}
;
_.toString_0 = function toString_16(){
  return this.ref != null?'Optional.of(' + valueOf_0(this.ref) + ')':'Optional.empty()';
}
;
var EMPTY;
var Ljava_util_Optional_2_classLit = createForClass('java.util', 'Optional', 59);
function $clinit_Random(){
  $clinit_Random = emptyMethod;
  var i, i0, twoToTheXMinus24Tmp, twoToTheXMinus48Tmp;
  twoToTheXMinus24 = initUnidimensionalArray(D_classLit, $intern_10, 38, 25, 15, 1);
  twoToTheXMinus48 = initUnidimensionalArray(D_classLit, $intern_10, 38, 33, 15, 1);
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
  hi = this$static.seedhi * $intern_19 + this$static.seedlo * 1502;
  lo = this$static.seedlo * $intern_19 + 11;
  carry = $wnd.Math.floor(lo * $intern_20);
  hi += carry;
  lo -= carry * $intern_21;
  hi %= $intern_21;
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
  hi = round_int($wnd.Math.floor(seed * $intern_20)) & 16777215;
  lo = round_int(seed - hi * $intern_21);
  this.seedhi = hi ^ 1502;
  this.seedlo = lo ^ $intern_19;
}

defineClass(306, 1, {}, Random);
_.seedhi = 0;
_.seedlo = 0;
var twoToTheXMinus24, twoToTheXMinus48, uniqueSeed = 0;
var Ljava_util_Random_2_classLit = createForClass('java.util', 'Random', 306);
function $forEachRemaining_0(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

function checkCriticalArrayBounds(end, length_0){
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

defineClass(310, 1, {});
_.forEachRemaining = function forEachRemaining_9(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.characteristics_0 = function characteristics_0(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize(){
  return this.sizeEstimate;
}
;
_.characteristics = 0;
_.sizeEstimate = 0;
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 310);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(149, 310, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 149);
function $forEachRemaining_1(this$static, consumer){
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

defineClass(211, 1, {});
_.forEachRemaining = function forEachRemaining_10(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.characteristics_0 = function characteristics_1(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_0(){
  return this.limit - this.index_0;
}
;
_.characteristics = 0;
_.index_0 = 0;
_.limit = 0;
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 211);
function $consume(this$static, consumer, index_0){
  consumer.accept(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(212, 211, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_11(consumer){
  $forEachRemaining_1(this, consumer);
}
;
_.tryAdvance = function tryAdvance(consumer){
  return $tryAdvance(this, consumer);
}
;
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 212);
function $initIterator(this$static){
  if (!this$static.it) {
    this$static.it = this$static.collection.iterator();
    this$static.estimateSize = this$static.collection.size_1();
  }
}

function Spliterators$IteratorSpliterator(collection, characteristics){
  this.collection = (checkCriticalNotNull(collection) , collection);
  this.characteristics = (characteristics & 4096) == 0?characteristics | 64 | 16384:characteristics;
}

defineClass(53, 1, {}, Spliterators$IteratorSpliterator);
_.characteristics_0 = function characteristics_2(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_1(){
  $initIterator(this);
  return this.estimateSize;
}
;
_.forEachRemaining = function forEachRemaining_12(consumer){
  $initIterator(this);
  this.it.forEachRemaining(consumer);
}
;
_.tryAdvance = function tryAdvance_0(consumer){
  checkCriticalNotNull(consumer);
  $initIterator(this);
  if (this.it.hasNext_0()) {
    consumer.accept(this.it.next_1());
    return true;
  }
  return false;
}
;
_.characteristics = 0;
_.estimateSize = 0;
var Ljava_util_Spliterators$IteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IteratorSpliterator', 53);
function $add_3(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_3(this$static.builder, this$static.delimiter);
  $append_1(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(137, 1, {}, StringJoiner);
_.toString_0 = function toString_17(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 137);
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

function values_1(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 51, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(51, 13, {3:1, 20:1, 13:1, 51:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 51, values_1);
function CollectorImpl(){
}

defineClass(369, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 369);
function Collectors$20methodref$add$Type(){
}

defineClass(123, 1, {}, Collectors$20methodref$add$Type);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 123);
function Collectors$21methodref$ctor$Type(){
}

defineClass(122, 1, {}, Collectors$21methodref$ctor$Type);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 122);
function Collectors$lambda$42$Type(){
}

defineClass(124, 1, {}, Collectors$lambda$42$Type);
var Ljava_util_stream_Collectors$lambda$42$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$42$Type', 124);
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
    throw toJs(new IllegalStateException_0("Stream already terminated, can't be modified or used"));
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

defineClass(309, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 309);
function $filter(this$static, predicate){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$FilterSpliterator(predicate, this$static.spliterator));
}

function $forEach_2(this$static, action){
  $terminate(this$static);
  this$static.spliterator.forEachRemaining(action);
}

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
  castTo(a_1, 29).add_0(t_2);
  return a_1;
}

function lambda$5(consumer_0, item_2){
  $accept(consumer_0, lambda$4(consumer_0.value_0, item_2));
}

defineClass(67, 309, {}, StreamImpl);
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 67);
function $lambda$0(this$static, action_1, item_1){
  if ($test(this$static.filter_0, item_1)) {
    this$static.found = true;
    action_1.accept(item_1);
  }
}

function StreamImpl$FilterSpliterator(filter, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -16449);
  checkCriticalNotNull(filter);
  this.filter_0 = filter;
  this.original = original;
}

defineClass(312, 149, {}, StreamImpl$FilterSpliterator);
_.tryAdvance = function tryAdvance_1(action){
  this.found = false;
  while (!this.found && this.original.tryAdvance(new StreamImpl$FilterSpliterator$lambda$0$Type(this, action)))
  ;
  return this.found;
}
;
_.found = false;
var Ljava_util_stream_StreamImpl$FilterSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator', 312);
function StreamImpl$FilterSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(315, 1, $intern_22, StreamImpl$FilterSpliterator$lambda$0$Type);
_.accept = function accept(arg0){
  $lambda$0(this.$$outer_0, this.action_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator/lambda$0$Type', 315);
function StreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.original = original;
}

defineClass(311, 149, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_2(action){
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(action));
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 311);
function StreamImpl$MapToObjSpliterator$lambda$0$Type(action_1){
  this.action_1 = action_1;
}

defineClass(314, 1, $intern_22, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept = function accept_0(arg0){
  this.action_1.accept(castTo(arg0, 12).backingJsObject);
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 314);
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(313, 1, $intern_22, StreamImpl$ValueConsumer);
_.accept = function accept_1(value_0){
  $accept(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 313);
function StreamImpl$lambda$5$Type(consumer_0){
  this.consumer_0 = consumer_0;
}

defineClass(316, 1, $intern_22, StreamImpl$lambda$5$Type);
_.accept = function accept_2(arg0){
  lambda$5(this.consumer_0, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 316);
function clone_0(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function copy(src_0, srcOfs, dest, destOfs, len, overwrite){
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
    spliceArgs.splice(0, 0, destOfs, overwrite?len:0);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

function createFrom(array, length_0){
  return stampJavaTypeInfo_1(new Array(length_0), array);
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy(values, 0, array, index_0, values.length, false);
}

function removeFrom(array, index_0){
  array.splice(index_0, 1);
}

defineClass(490, 1, {});
function stampJavaTypeInfo_1(array, referenceType){
  return stampJavaTypeInfo_0(array, referenceType);
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

function checkCriticalStringBounds(start_0, end, length_0){
  if (start_0 < 0 || end > length_0 || end < start_0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: ' + start_0 + ', toIndex: ' + end + ', length: ' + length_0));
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

defineClass(481, 1, {});
function getHashCode_0(o){
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

function getHashCode_1(str){
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
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function forEach(obj, cb){
  for (var element in obj) {
    cb(element);
  }
}

defineClass(483, 1, {});
function $animate(this$static){
  this$static.delay > 0?$schedule(new Animation$1(this$static), this$static.delay):$animateElement(this$static);
  return this$static;
}

function $animateElement(this$static){
  this$static.stopListener = new Animation$lambda$2$Type(this$static);
  $addEventListener(this$static.element, 'webkitAnimationEnd', this$static.stopListener);
  $addEventListener(this$static.element, 'MSAnimationEnd', this$static.stopListener);
  $addEventListener(this$static.element, 'mozAnimationEnd', this$static.stopListener);
  $addEventListener(this$static.element, 'oanimationend', this$static.stopListener);
  $addEventListener(this$static.element, 'animationend', this$static.stopListener);
  $setTransitionDuration(this$static.element.style_0, this$static.duration + 'ms');
  $setProperty(this$static.element.style_0, 'animation-duration', this$static.duration + 'ms');
  $setProperty(this$static.element.style_0, '-webkit-animation-duration', this$static.duration + 'ms');
  this$static.repeatCount != 1 && $setProperty(this$static.element.style_0, 'animation-iteration-count', this$static.repeatCount + '');
  $add_4(this$static.element.style_0, 'animated');
  $add_4(this$static.element.style_0, 'ease-in-out');
  $add_4(this$static.element.style_0, this$static.transition.style_0);
}

function $callback(this$static, callback){
  this$static.callback = callback;
  return this$static;
}

function $delay(this$static, delay){
  this$static.delay = delay;
  return this$static;
}

function $stop(this$static){
  $remove_9(this$static.element.style_0, this$static.transition.style_0);
  $remove_9(this$static.element.style_0, 'animated');
  $remove_9(this$static.element.style_0, 'infinite');
  $remove_9(this$static.element.style_0, 'ease-in-out');
  $removeProperty(this$static.element.style_0, 'animation-duration');
  $removeProperty(this$static.element.style_0, '-webkit-animation-duration');
  $removeEventListener(this$static.element, 'webkitAnimationEnd', this$static.stopListener);
  $removeEventListener(this$static.element, 'MSAnimationEnd', this$static.stopListener);
  $removeEventListener(this$static.element, 'mozAnimationEnd', this$static.stopListener);
  $removeEventListener(this$static.element, 'oanimationend', this$static.stopListener);
  $removeEventListener(this$static.element, 'animationend', this$static.stopListener);
  this$static.callback.onComplete(this$static.element.wrappedElement);
}

function $transition(this$static, transition){
  this$static.transition = transition;
  return this$static;
}

function Animation_0(element){
  this.DEFAULT_CALLBACK = new Animation$lambda$0$Type;
  this.transition = ($clinit_Transition() , BOUNCE);
  this.callback = this.DEFAULT_CALLBACK;
  this.element = new DominoElement(element);
}

defineClass(151, 1, {}, Animation_0);
_.delay = 0;
_.duration = 800;
_.repeatCount = 1;
var Lorg_dominokit_domino_ui_animations_Animation_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation', 151);
function $cancel(this$static){
  if (this$static.timerId == null) {
    return;
  }
  this$static.isRepeating?$wnd.goog.global.clearInterval($doubleValue(this$static.timerId)):$wnd.goog.global.clearTimeout($doubleValue(this$static.timerId));
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  this$static.timerId != null && $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = ($clinit_DomGlobal() , $wnd.goog.global.setTimeout(makeLambdaFunction(Timer$lambda$0$Type.prototype.onInvoke_0, Timer$lambda$0$Type, [this$static]), delayMillis));
}

function Timer(){
}

function lambda$0(timer_0){
  timer_0.isRepeating || (timer_0.timerId = null);
  timer_0.run();
}

defineClass(110, 1, {});
_.isRepeating = false;
_.timerId = null;
var Lorg_gwtproject_timer_client_Timer_2_classLit = createForClass('org.gwtproject.timer.client', 'Timer', 110);
function Animation$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(335, 110, {}, Animation$1);
_.run = function run(){
  $animateElement(this.this$01);
}
;
var Lorg_dominokit_domino_ui_animations_Animation$1_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation/1', 335);
function Animation$lambda$0$Type(){
}

defineClass(334, 1, {}, Animation$lambda$0$Type);
_.onComplete = function onComplete_0(element){
}
;
var Lorg_dominokit_domino_ui_animations_Animation$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation/lambda$0$Type', 334);
function Animation$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(336, 1, {}, Animation$lambda$2$Type);
_.handleEvent = function handleEvent(arg0){
  $stop(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_animations_Animation$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation/lambda$2$Type', 336);
function $clinit_Transition(){
  $clinit_Transition = emptyMethod;
  BOUNCE = new Transition('BOUNCE', 0, 'bounce');
  FLASH = new Transition('FLASH', 1, 'flash');
  PULSE = new Transition('PULSE', 2, 'pulse');
  RUBBER_BAND = new Transition('RUBBER_BAND', 3, 'rubberBand');
  SHAKE = new Transition('SHAKE', 4, 'shake');
  SWING = new Transition('SWING', 5, 'swing');
  TADA = new Transition('TADA', 6, 'tada');
  WOBBLE = new Transition('WOBBLE', 7, 'wobble');
  JELLO = new Transition('JELLO', 8, 'jello');
  BOUNCE_IN = new Transition('BOUNCE_IN', 9, 'bounceIn');
  BOUNCE_IN_DOWN = new Transition('BOUNCE_IN_DOWN', 10, 'bounceInDown');
  BOUNCE_IN_LEFT = new Transition('BOUNCE_IN_LEFT', 11, 'bounceInLeft');
  BOUNCE_IN_RIGHT = new Transition('BOUNCE_IN_RIGHT', 12, 'bounceInRight');
  BOUNCE_IN_UP = new Transition('BOUNCE_IN_UP', 13, 'bounceInUp');
  BOUNCE_OUT = new Transition('BOUNCE_OUT', 14, 'bounceOut');
  BOUNCE_OUT_DOWN = new Transition('BOUNCE_OUT_DOWN', 15, 'bounceOutDown');
  BOUNCE_OUT_LEFT = new Transition('BOUNCE_OUT_LEFT', 16, 'bounceOutLeft');
  BOUNCE_OUT_RIGHT = new Transition('BOUNCE_OUT_RIGHT', 17, 'bounceOutRight');
  BOUNCE_OUT_UP = new Transition('BOUNCE_OUT_UP', 18, 'bounceOutUp');
  FADE_IN = new Transition('FADE_IN', 19, 'fadeIn');
  FADE_IN_DOWN = new Transition('FADE_IN_DOWN', 20, 'fadeInDown');
  FADE_IN_DOWN_BIG = new Transition('FADE_IN_DOWN_BIG', 21, 'fadeInDownBig');
  FADE_IN_LEFT = new Transition('FADE_IN_LEFT', 22, 'fadeInLeft');
  FADE_IN_LEFT_BIG = new Transition('FADE_IN_LEFT_BIG', 23, 'fadeInLeftBig');
  FADE_IN_RIGHT = new Transition('FADE_IN_RIGHT', 24, 'fadeInRight');
  FADE_IN_RIGHT_BIG = new Transition('FADE_IN_RIGHT_BIG', 25, 'fadeInRightBig');
  FADE_IN_UP = new Transition('FADE_IN_UP', 26, 'fadeInUp');
  FADE_IN_UP_BIG = new Transition('FADE_IN_UP_BIG', 27, 'fadeInUpBig');
  FADE_OUT = new Transition('FADE_OUT', 28, 'fadeOut');
  FADE_OUT_DOWN = new Transition('FADE_OUT_DOWN', 29, 'fadeOutDown');
  FADE_OUT_DOWN_BIG = new Transition('FADE_OUT_DOWN_BIG', 30, 'fadeOutDownBig');
  FADE_OUT_LEFT = new Transition('FADE_OUT_LEFT', 31, 'fadeOutLeft');
  FADE_OUT_LEFT_BIG = new Transition('FADE_OUT_LEFT_BIG', 32, 'fadeOutLeftBig');
  FADE_OUT_RIGHT = new Transition('FADE_OUT_RIGHT', 33, 'fadeOutRight');
  FADE_OUT_RIGHT_BIG = new Transition('FADE_OUT_RIGHT_BIG', 34, 'fadeOutRightBig');
  FADE_OUT_UP = new Transition('FADE_OUT_UP', 35, 'fadeOutUp');
  FADE_OUT_UP_BIG = new Transition('FADE_OUT_UP_BIG', 36, 'fadeOutUpBig');
  FLIP = new Transition('FLIP', 37, 'flip');
  FLIP_IN_X = new Transition('FLIP_IN_X', 38, 'flipInX');
  FLIP_IN_Y = new Transition('FLIP_IN_Y', 39, 'flipInY');
  FLIP_OUT_X = new Transition('FLIP_OUT_X', 40, 'flipOutX');
  FLIP_OUT_Y = new Transition('FLIP_OUT_Y', 41, 'flipOutY');
  LIGHT_SPEED_IN = new Transition('LIGHT_SPEED_IN', 42, 'lightSpeedIn');
  LIGHT_SPEED_OUT = new Transition('LIGHT_SPEED_OUT', 43, 'lightSpeedOut');
  ROTATE_IN = new Transition('ROTATE_IN', 44, 'rotateIn');
  ROTATE_IN_DOWN_LEFT = new Transition('ROTATE_IN_DOWN_LEFT', 45, 'rotateInDownLeft');
  ROTATE_IN_DOWN_RIGHT = new Transition('ROTATE_IN_DOWN_RIGHT', 46, 'rotateInDownRight');
  ROTATE_IN_UP_LEFT = new Transition('ROTATE_IN_UP_LEFT', 47, 'rotateInUpLeft');
  ROTATE_IN_UP_RIGHT = new Transition('ROTATE_IN_UP_RIGHT', 48, 'rotateInUpRight');
  ROTATE_OUT = new Transition('ROTATE_OUT', 49, 'rotateOut');
  ROTATE_OUT_DOWN_LEFT = new Transition('ROTATE_OUT_DOWN_LEFT', 50, 'rotateOutDownLeft');
  ROTATE_OUT_DOWN_RIGHT = new Transition('ROTATE_OUT_DOWN_RIGHT', 51, 'rotateOutDownRight');
  ROTATE_OUT_UP_LEFT = new Transition('ROTATE_OUT_UP_LEFT', 52, 'rotateOutUpLeft');
  ROTATE_OUT_UP_RIGHT = new Transition('ROTATE_OUT_UP_RIGHT', 53, 'rotateOutUpRight');
  SLIDE_IN_UP = new Transition('SLIDE_IN_UP', 54, 'slideInUp');
  SLIDE_IN_DOWN = new Transition('SLIDE_IN_DOWN', 55, 'slideInDown');
  SLIDE_IN_LEFT = new Transition('SLIDE_IN_LEFT', 56, 'slideInLeft');
  SLIDE_IN_RIGHT = new Transition('SLIDE_IN_RIGHT', 57, 'slideInRight');
  SLIDE_OUT_UP = new Transition('SLIDE_OUT_UP', 58, 'slideOutUp');
  SLIDE_OUT_DOWN = new Transition('SLIDE_OUT_DOWN', 59, 'slideOutDown');
  SLIDE_OUT_LEFT = new Transition('SLIDE_OUT_LEFT', 60, 'slideOutLeft');
  SLIDE_OUT_RIGHT = new Transition('SLIDE_OUT_RIGHT', 61, 'slideOutRight');
  ZOOM_IN = new Transition('ZOOM_IN', 62, 'zoomIn');
  ZOOM_IN_DOWN = new Transition('ZOOM_IN_DOWN', 63, 'zoomInDown');
  ZOOM_IN_LEFT = new Transition('ZOOM_IN_LEFT', 64, 'zoomInLeft');
  ZOOM_IN_RIGHT = new Transition('ZOOM_IN_RIGHT', 65, 'zoomInRight');
  ZOOM_IN_UP = new Transition('ZOOM_IN_UP', 66, 'zoomInUp');
  ZOOM_OUT = new Transition('ZOOM_OUT', 67, 'zoomOut');
  ZOOM_OUT_DOWN = new Transition('ZOOM_OUT_DOWN', 68, 'zoomOutDown');
  ZOOM_OUT_LEFT = new Transition('ZOOM_OUT_LEFT', 69, 'zoomOutLeft');
  ZOOM_OUT_RIGHT = new Transition('ZOOM_OUT_RIGHT', 70, 'zoomOutRight');
  ZOOM_OUT_UP = new Transition('ZOOM_OUT_UP', 71, 'zoomOutUp');
  HINGE = new Transition('HINGE', 72, 'hinge');
  ROLL_IN = new Transition('ROLL_IN', 73, 'rollIn');
  ROLL_OUT = new Transition('ROLL_OUT', 74, 'rollOut');
  COLLAPSE_UP = new Transition('COLLAPSE_UP', 75, 'collapseUp');
}

function Transition(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_2(){
  $clinit_Transition();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_animations_Transition_2_classLit, 1), $intern_1, 6, 0, [BOUNCE, FLASH, PULSE, RUBBER_BAND, SHAKE, SWING, TADA, WOBBLE, JELLO, BOUNCE_IN, BOUNCE_IN_DOWN, BOUNCE_IN_LEFT, BOUNCE_IN_RIGHT, BOUNCE_IN_UP, BOUNCE_OUT, BOUNCE_OUT_DOWN, BOUNCE_OUT_LEFT, BOUNCE_OUT_RIGHT, BOUNCE_OUT_UP, FADE_IN, FADE_IN_DOWN, FADE_IN_DOWN_BIG, FADE_IN_LEFT, FADE_IN_LEFT_BIG, FADE_IN_RIGHT, FADE_IN_RIGHT_BIG, FADE_IN_UP, FADE_IN_UP_BIG, FADE_OUT, FADE_OUT_DOWN, FADE_OUT_DOWN_BIG, FADE_OUT_LEFT, FADE_OUT_LEFT_BIG, FADE_OUT_RIGHT, FADE_OUT_RIGHT_BIG, FADE_OUT_UP, FADE_OUT_UP_BIG, FLIP, FLIP_IN_X, FLIP_IN_Y, FLIP_OUT_X, FLIP_OUT_Y, LIGHT_SPEED_IN, LIGHT_SPEED_OUT, ROTATE_IN, ROTATE_IN_DOWN_LEFT, ROTATE_IN_DOWN_RIGHT, ROTATE_IN_UP_LEFT, ROTATE_IN_UP_RIGHT, ROTATE_OUT, ROTATE_OUT_DOWN_LEFT, ROTATE_OUT_DOWN_RIGHT, ROTATE_OUT_UP_LEFT, ROTATE_OUT_UP_RIGHT, SLIDE_IN_UP, SLIDE_IN_DOWN, SLIDE_IN_LEFT, SLIDE_IN_RIGHT, SLIDE_OUT_UP, SLIDE_OUT_DOWN, SLIDE_OUT_LEFT, SLIDE_OUT_RIGHT, ZOOM_IN, ZOOM_IN_DOWN, ZOOM_IN_LEFT, ZOOM_IN_RIGHT, ZOOM_IN_UP, ZOOM_OUT, ZOOM_OUT_DOWN, ZOOM_OUT_LEFT, ZOOM_OUT_RIGHT, ZOOM_OUT_UP, HINGE, ROLL_IN, ROLL_OUT, COLLAPSE_UP]);
}

defineClass(6, 13, {3:1, 20:1, 13:1, 6:1}, Transition);
var BOUNCE, BOUNCE_IN, BOUNCE_IN_DOWN, BOUNCE_IN_LEFT, BOUNCE_IN_RIGHT, BOUNCE_IN_UP, BOUNCE_OUT, BOUNCE_OUT_DOWN, BOUNCE_OUT_LEFT, BOUNCE_OUT_RIGHT, BOUNCE_OUT_UP, COLLAPSE_UP, FADE_IN, FADE_IN_DOWN, FADE_IN_DOWN_BIG, FADE_IN_LEFT, FADE_IN_LEFT_BIG, FADE_IN_RIGHT, FADE_IN_RIGHT_BIG, FADE_IN_UP, FADE_IN_UP_BIG, FADE_OUT, FADE_OUT_DOWN, FADE_OUT_DOWN_BIG, FADE_OUT_LEFT, FADE_OUT_LEFT_BIG, FADE_OUT_RIGHT, FADE_OUT_RIGHT_BIG, FADE_OUT_UP, FADE_OUT_UP_BIG, FLASH, FLIP, FLIP_IN_X, FLIP_IN_Y, FLIP_OUT_X, FLIP_OUT_Y, HINGE, JELLO, LIGHT_SPEED_IN, LIGHT_SPEED_OUT, PULSE, ROLL_IN, ROLL_OUT, ROTATE_IN, ROTATE_IN_DOWN_LEFT, ROTATE_IN_DOWN_RIGHT, ROTATE_IN_UP_LEFT, ROTATE_IN_UP_RIGHT, ROTATE_OUT, ROTATE_OUT_DOWN_LEFT, ROTATE_OUT_DOWN_RIGHT, ROTATE_OUT_UP_LEFT, ROTATE_OUT_UP_RIGHT, RUBBER_BAND, SHAKE, SLIDE_IN_DOWN, SLIDE_IN_LEFT, SLIDE_IN_RIGHT, SLIDE_IN_UP, SLIDE_OUT_DOWN, SLIDE_OUT_LEFT, SLIDE_OUT_RIGHT, SLIDE_OUT_UP, SWING, TADA, WOBBLE, ZOOM_IN, ZOOM_IN_DOWN, ZOOM_IN_LEFT, ZOOM_IN_RIGHT, ZOOM_IN_UP, ZOOM_OUT, ZOOM_OUT_DOWN, ZOOM_OUT_LEFT, ZOOM_OUT_RIGHT, ZOOM_OUT_UP;
var Lorg_dominokit_domino_ui_animations_Transition_2_classLit = createForEnum('org.dominokit.domino.ui.animations', 'Transition', 6, values_2);
function $addClickListener(this$static, listener){
  this$static.getClickableElement().addEventListener(($clinit_EventType() , click_0).name_0, listener);
  return this$static.element_0;
}

function $addCss(this$static, cssClass){
  $add_4(this$static.style_0, cssClass);
  return this$static.element_0;
}

function $addEventListener(this$static, type_0, listener){
  this$static.element_2().addEventListener(type_0, listener);
  return this$static.element_0;
}

function $addEventListener_0(this$static, type_0, listener){
  this$static.wrappedElement.addEventListener(type_0.name_0, listener);
  return this$static.element_0;
}

function $appendChild(this$static, node){
  this$static.element_0.element_2().appendChild(node);
  return this$static.element_0;
}

function $appendChild_0(this$static, isElement){
  this$static.element_0.element_2().appendChild(isElement.element_2());
  return this$static.element_0;
}

function $apply(this$static){
  castTo(this$static.element_0, 34);
  return this$static.element_0;
}

function $clearElement(this$static){
  clear_0(this$static.wrappedElement);
  return this$static.element_0;
}

function $css(this$static, cssClass){
  $add_4(this$static.style_0, cssClass);
  return this$static.element_0;
}

function $elevate(this$static, elevation){
  this$static.elevation?$remove_9(this$static.style_0, this$static.elevation.style_0):removeFrom_0(this$static.element_2());
  this$static.elevation = elevation;
  $add_4(this$static.style_0, this$static.elevation.style_0);
  return this$static;
}

function $getAttribute(this$static, name_0){
  return this$static.wrappedElement.getAttribute(name_0);
}

function $hasAttribute(this$static, name_0){
  return this$static.wrappedElement.hasAttribute(name_0);
}

function $hasDirectChild(this$static, node){
  var parentNode;
  parentNode = node.parentNode;
  if (parentNode == null) {
    return false;
  }
  return equals_Ljava_lang_Object__Z__devirtual$(parentNode, this$static.element_0.element_2());
}

function $hide(this$static){
  $hide_0(this$static.collapsible_0);
  return this$static.element_0;
}

function $init(this$static, element){
  this$static.element_0 = element;
  if (this$static.element_2().hasAttribute('domino-uuid') && this$static.element_2().getAttribute('domino-uuid') != null && this$static.element_2().getAttribute('domino-uuid').length != 0) {
    this$static.uuid = this$static.element_2().getAttribute('domino-uuid');
  }
   else {
    this$static.uuid = unique();
    $setAttribute(this$static, 'domino-uuid', this$static.uuid);
  }
  this$static.collapsible_0 = new Collapsible(this$static.element_2());
  this$static.style_0 = new Style(element);
}

function $insertAfter(this$static, newNode, otherNode){
  this$static.element.insertBefore(newNode, otherNode.nextSibling);
  return this$static;
}

function $insertFirst(this$static, newNode){
  this$static.wrappedElement.insertBefore(newNode.icon_0.wrappedElement, this$static.wrappedElement.firstChild);
  return this$static.element_0;
}

function $isAttached(this$static){
  return ($clinit_DomGlobal() , document_0).body.querySelector("[domino-uuid='" + this$static.uuid + "']") != null;
}

function $remove_8(this$static){
  this$static.element_2().remove();
  return this$static.element_0;
}

function $removeAttribute(this$static, name_0){
  this$static.wrappedElement.removeAttribute(name_0);
  return this$static.element_0;
}

function $removeChild(this$static, node){
  this$static.wrappedElement.removeChild(node);
  return this$static.element_0;
}

function $removeCss(this$static, cssClass){
  $remove_9(this$static.style_0, cssClass);
  return this$static.element_0;
}

function $removeEventListener(this$static, type_0, listener){
  this$static.wrappedElement.removeEventListener(type_0, listener);
  return this$static.element_0;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.element_2().setAttribute(name_0, value_0);
  return this$static.element_0;
}

function $setAttribute_0(this$static, name_0, value_0){
  this$static.wrappedElement.setAttribute(name_0, value_0);
  return this$static.element_0;
}

function $setDisabled(this$static, disabled){
  return disabled?($setAttribute(this$static.buttonElement, 'disabled', 'disabled') , this$static):($removeAttribute(this$static.buttonElement, 'disabled') , this$static);
}

function $setTextContent(this$static, text_0){
  this$static.element_2().textContent = text_0;
  return this$static.element_0;
}

function $setTooltip(this$static, node, position){
  !this$static.tooltip?(this$static.tooltip = new Tooltip(this$static.element_2(), node)):$setContent(this$static.tooltip, node);
  $position_0(this$static.tooltip, position);
  return this$static.element_0;
}

function $setTooltip_0(this$static, text_0, position){
  return $setTooltip(this$static, of_1(text_0), position);
}

function $show(this$static){
  $show_0(this$static.collapsible_0);
  return this$static.element_0;
}

function $styler(this$static, styleEditor){
  styleEditor.applyStyles(this$static.style_0);
  return this$static.element_0;
}

function $toggleDisplay(this$static, state){
  $toggleDisplay_1(this$static.collapsible_0, state);
  return this$static.element_0;
}

function $withWaves(this$static){
  this$static.wavesSupport_0 = $initWaves_0(new WavesSupport(this$static.element_0.element_2()));
  return this$static.element_0;
}

function BaseDominoElement(){
  $clinit_Optional();
}

defineClass(22, 1, {});
_.getClickableElement = function getClickableElement(){
  return this.element_2();
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement', 22);
function $applyWaveStyle(this$static, waveStyle){
  $applyWaveStyle_0(this$static.wavesSupport, waveStyle);
  return this$static.element_0;
}

function $setWaveColor(this$static, waveColor){
  $setWaveColor_0(this$static.wavesSupport, waveColor);
  return this$static.element_0;
}

function WavesElement(){
  BaseDominoElement.call(this);
}

defineClass(139, 22, {});
var Lorg_dominokit_domino_ui_style_WavesElement_2_classLit = createForClass('org.dominokit.domino.ui.style', 'WavesElement', 139);
function $setSize(this$static, size_0){
  if (size_0) {
    !!this$static.size_0 && $remove_9(this$static.buttonElement.style_0, this$static.size_0.style_0);
    $add_4(this$static.buttonElement.style_0, size_0.style_0);
    this$static.size_0 = size_0;
  }
  return this$static;
}

defineClass(300, 139, {});
_.getClickableElement = function getClickableElement_0(){
  return this.element_2();
}
;
var Lorg_dominokit_domino_ui_button_BaseButton_2_classLit = createForClass('org.dominokit.domino.ui.button', 'BaseButton', 300);
function Button(text_0, type_0){
  WavesElement.call(this);
  new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('span'), $wnd.HTMLElement));
  this.textElement = document_0.createTextNode('');
  $clinit_Elevation();
  this.buttonElement = new DominoElement($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('button'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['btn'])).element);
  $setSize(this, ($clinit_ButtonSize() , MEDIUM));
  $init(this, this);
  this.wavesSupport = $initWaves_0(new WavesSupport(this.buttonElement.wrappedElement));
  $elevate(this, LEVEL_1);
  this.textElement.textContent = text_0;
  $appendChild(this.buttonElement, this.textElement);
  !!this.type_0 && $remove_9(this.buttonElement.style_0, this.type_0.style_0);
  $add_4(this.buttonElement.style_0, type_0.style_0);
  this.type_0 = type_0;
}

defineClass(72, 300, {72:1}, Button);
_.element_2 = function element_0(){
  return this.buttonElement.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_button_Button_2_classLit = createForClass('org.dominokit.domino.ui.button', 'Button', 72);
function $clinit_ButtonSize(){
  $clinit_ButtonSize = emptyMethod;
  LARGE = new ButtonSize('LARGE', 0, 'lg');
  MEDIUM = new ButtonSize('MEDIUM', 1, 'md');
  SMALL = new ButtonSize('SMALL', 2, 'sm');
  XSMALL = new ButtonSize('XSMALL', 3, 'xs');
}

function ButtonSize(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_3(){
  $clinit_ButtonSize();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_button_ButtonSize_2_classLit, 1), $intern_1, 75, 0, [LARGE, MEDIUM, SMALL, XSMALL]);
}

defineClass(75, 13, {3:1, 20:1, 13:1, 75:1}, ButtonSize);
var LARGE, MEDIUM, SMALL, XSMALL;
var Lorg_dominokit_domino_ui_button_ButtonSize_2_classLit = createForEnum('org.dominokit.domino.ui.button', 'ButtonSize', 75, values_3);
function $appendChild_1(this$static, element){
  $appendChild(this$static.body_0, element.element_2());
  return this$static;
}

function Card(){
  $clinit_Optional();
  this.root_0 = castTo($addCss(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'card'), 5);
  this.header = castTo($addCss(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'header'), 5);
  this.headerTitle = new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('h2'), $wnd.HTMLElement))).element);
  this.headerDescription = new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('small'), $wnd.HTMLElement))).element);
  this.headerBar = castTo($addCss(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('ul'), $wnd.HTMLElement))).element), 'header-actions'), 5);
  this.body_0 = castTo($addCss(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'body'), 5);
  this.title_0 = document_0.createTextNode('');
  this.description = document_0.createTextNode('');
  $appendChild_0(castTo($appendChild(this.headerTitle, this.title_0), 5), this.headerDescription);
  this.logoContainer = castTo($hide(castTo($css(new FlexItem, 'logo'), 10)), 10);
  $appendChild_0(this.header, $appendChild_2($appendChild_2($appendChild_2(new FlexLayout, $setAlignSelf(this.logoContainer, ($clinit_FlexAlign() , CENTER))), castTo($appendChild_0($setFlexGrow($setAlignSelf(new FlexItem, CENTER)), this.headerTitle), 10)), castTo($appendChild_0(new FlexItem, this.headerBar), 10)));
  $appendChild_0(castTo($appendChild_0(this.root_0, this.header), 5), this.body_0);
  $appendChild(this.headerDescription, this.description);
  $addHideHandler(this.body_0.collapsible_0, new Card$lambda$0$Type);
  $addShowHandler(this.body_0.collapsible_0, new Card$lambda$1$Type);
  $init(this, this);
}

function create_1(title_0, description){
  var card;
  card = new Card;
  card.title_0.textContent = title_0;
  card.description.textContent = description;
  return card;
}

defineClass(30, 22, {30:1}, Card);
_.element_2 = function element_2(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lorg_dominokit_domino_ui_cards_Card_2_classLit = createForClass('org.dominokit.domino.ui.cards', 'Card', 30);
function Card$lambda$0$Type(){
}

defineClass(215, 1, {376:1}, Card$lambda$0$Type);
_.onHidden = function onHidden(){
}
;
var Lorg_dominokit_domino_ui_cards_Card$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.cards', 'Card/lambda$0$Type', 215);
function Card$lambda$1$Type(){
}

defineClass(216, 1, {377:1}, Card$lambda$1$Type);
_.onShown = function onShown(){
}
;
var Lorg_dominokit_domino_ui_cards_Card$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.cards', 'Card/lambda$1$Type', 216);
function $addHideHandler(this$static, handler){
  !this$static.hideHandlers && (this$static.hideHandlers = new ArrayList);
  $add_0(this$static.hideHandlers, handler);
  return this$static;
}

function $addShowHandler(this$static, handler){
  $add_0(this$static.showHandlers, handler);
  return this$static;
}

function $hide_0(this$static){
  $setDisplay(this$static.style_0, 'none');
  $setAttribute(new DominoElement(this$static.element), 'd-collapsed', 'true');
  !!this$static.hideHandlers && $forEach_0(this$static.hideHandlers, new Collapsible$0methodref$onHidden$Type);
  this$static.collapsed = true;
  return this$static;
}

function $show_0(this$static){
  $forEach_0(this$static.showHandlers, new Collapsible$1methodref$onShown$Type);
  $removeProperty(this$static.style_0, 'display');
  $removeAttribute(new DominoElement(this$static.element), 'd-collapsed');
  this$static.collapsed = false;
  return this$static;
}

function $toggleDisplay_0(this$static){
  this$static.collapsed || $hasAttribute(new DominoElement(this$static.element), 'd-collapsed')?$show_0(this$static):$hide_0(this$static);
  return this$static;
}

function $toggleDisplay_1(this$static, state){
  state?$show_0(this$static):$hide_0(this$static);
  return this$static;
}

function Collapsible(element){
  this.showHandlers = new ArrayList;
  this.element = element;
  this.style_0 = new Style(new Style$lambda$0$Type(element));
}

defineClass(140, 1, {}, Collapsible);
_.element_2 = function element_3(){
  return this.element;
}
;
_.collapsed = false;
var Lorg_dominokit_domino_ui_collapsible_Collapsible_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible', 140);
function Collapsible$0methodref$onHidden$Type(){
}

defineClass(205, 1, $intern_22, Collapsible$0methodref$onHidden$Type);
_.accept = function accept_3(arg0){
  castTo(arg0, 376).onHidden();
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$0methodref$onHidden$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/0methodref$onHidden$Type', 205);
function Collapsible$1methodref$onShown$Type(){
}

defineClass(206, 1, $intern_22, Collapsible$1methodref$onShown$Type);
_.accept = function accept_4(arg0){
  castTo(arg0, 377).onShown();
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$1methodref$onShown$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/1methodref$onShown$Type', 206);
function $addValidator(this$static, validator){
  $addValidator_0(this$static.elementValidations, validator);
  return this$static;
}

function $getRequiredErrorMessage(this$static){
  return this$static.requiredErrorMessage == null?'* This field is required.':this$static.requiredErrorMessage;
}

function $lambda$0_0(this$static, message_0){
  var errorLabel;
  errorLabel = castToNative($textContent($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('label'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['error'])), message_0).element, $wnd.HTMLLabelElement);
  $add_0(this$static.errorLabels, errorLabel);
  $appendChild(new DominoElement(this$static.errorItem.element), errorLabel);
}

function $removeErrors(this$static){
  this$static.errorLabels.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
  this$static.errors.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
  $clearElement(new DominoElement(this$static.errorItem.element));
  $remove_9(this$static.style_0, 'error');
}

function $setRequired(this$static){
  $removeRequiredIndicator(($clinit_DominoFields() , this$static), this$static.requiredIndicator);
  $addValidator(this$static, this$static.requiredValidator);
  this$static.showRequiredIndicator && $appendRequiredIndicator(this$static, this$static.requiredIndicator);
  this$static.requiredErrorMessage = 'Du musst einen Nutzernamen eingeben.';
  return this$static;
}

defineClass(285, 22, {});
_.fixErrorsPosition = false;
_.showRequiredIndicator = true;
var Lorg_dominokit_domino_ui_forms_BasicFormElement_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'BasicFormElement', 285);
function $callChangeHandlers(this$static){
  $forEach_0(this$static.changeHandlers, new ValueBox$lambda$6$Type(this$static));
}

function $clearInvalid(this$static){
  var stringValue;
  this$static.valid = true;
  $add_4(this$static.fieldContainer.style_0, 'fc-' + this$static.focusColor.getStyle());
  $remove_9(this$static.fieldContainer.style_0, ($clinit_Color() , 'fc-col-red'));
  $removeLabelColor(this$static, RED);
  $contains_3(this$static.fieldGroup.style_0, 'focused')?$doFocus(this$static):$doUnfocus(this$static);
  stringValue = $getValue_0(this$static);
  !(stringValue == null || $trim(stringValue).length == 0) || $contains_3(this$static.fieldGroup.style_0, 'focused')?$floatLabel(this$static):$unfloatLabel(this$static);
  $clinit_DominoFields();
  return $show(new DominoElement(this$static.helpItem.element)) , $removeErrors(this$static) , this$static.fixErrorsPosition || $hide(new DominoElement(this$static.errorItem.element)) , this$static;
}

function $doFocus(this$static){
  var stringValue;
  if (!$hasAttribute(new DominoElement(this$static.inputElement.wrappedElement), 'disabled')) {
    $add_4(this$static.fieldGroup.style_0, 'focused');
    $floatLabel(this$static);
    if (this$static.valid) {
      $add_4(this$static.fieldContainer.style_0, 'fc-' + this$static.focusColor.getStyle());
      $setLabelColor(this$static, this$static.focusColor);
    }
    this$static.placeholder != null && (stringValue = $getValue_0(this$static) , (stringValue == null || $trim(stringValue).length == 0) && this$static.floating) && $setAttribute(this$static.inputElement, 'placeholder', this$static.placeholder);
  }
}

function $doUnfocus(this$static){
  var stringValue;
  $remove_9(this$static.fieldGroup.style_0, 'focused');
  $remove_10(this$static.fieldContainer.style_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['fc-' + this$static.focusColor.getStyle(), 'focused']));
  $unfloatLabel(this$static);
  $removeLabelColor(this$static, this$static.focusColor);
  this$static.placeholder != null && (stringValue = $getValue_0(this$static) , !((stringValue == null || $trim(stringValue).length == 0) && this$static.floating)) && $removeAttribute(this$static.inputElement, 'placeholder');
}

function $floatLabel(this$static){
  if (!this$static.floating || this$static.permaFloating) {
    $add_4(this$static.fieldGroup.style_0, 'floating');
    this$static.floating = true;
  }
}

function $floating(this$static){
  var stringValue;
  $floatLabel(this$static);
  this$static.permaFloating = true;
  this$static.placeholder != null && (stringValue = $getValue_0(this$static) , (stringValue == null || $trim(stringValue).length == 0) && this$static.floating) && $setAttribute(this$static.inputElement, 'placeholder', this$static.placeholder);
  return this$static;
}

function $invalidate(this$static, errorMessage){
  this$static.valid = false;
  $updateValidationStyles(this$static);
  $clinit_DominoFields();
  new Collections$SingletonList(errorMessage);
  return $invalidate_0(this$static, new Collections$SingletonList(errorMessage)) , this$static;
}

function $invalidate_0(this$static, errorMessages){
  this$static.valid = false;
  $updateValidationStyles(this$static);
  $clinit_DominoFields();
  return $toggleDisplay(new DominoElement(this$static.helpItem.element), false) , $removeErrors(this$static) , this$static.fixErrorsPosition?$show(new DominoElement(this$static.errorItem.element)):$toggleDisplay(new DominoElement(this$static.errorItem.element), true) , $add_4(this$static.style_0, 'error') , $forEach(errorMessages, new BasicFormElement$lambda$0$Type(this$static)) , this$static.errors.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1) , $addAll(this$static.errors, errorMessages) , this$static;
}

function $lambda$1(this$static){
  var stringValue, stringValue0;
  stringValue0 = $getValue_0(this$static);
  (stringValue0 == null || $trim(stringValue0).length == 0) && this$static.placeholder != null && (stringValue = $getValue_0(this$static) , (stringValue == null || $trim(stringValue).length == 0) && this$static.floating) && $setAttribute(this$static.inputElement, 'placeholder', this$static.placeholder);
}

function $lambda$4(this$static, shouldCondense_0){
  (checkCriticalNotNull(shouldCondense_0) , shouldCondense_0) && ($remove_9(this$static.style_0, 'condensed') , $add_4(this$static.style_0, 'condensed') , this$static);
}

function $lambda$8(this$static){
  $doUnfocus(this$static);
  !!this$static.autoValidator && this$static.validateOnFocusLost && $validate(this$static.elementValidations);
}

function $lambda$9(this$static, evt_0){
  if ($hasAttribute(new DominoElement(this$static.inputElement.wrappedElement), 'disabled')) {
    evt_0.stopPropagation();
    evt_0.preventDefault();
  }
   else {
    $hasAttribute(new DominoElement(this$static.inputElement.wrappedElement), 'disabled') || (($clinit_DomGlobal() , document_0).body.querySelector("[domino-uuid='" + this$static.uuid + "']") != null?((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement.focus() , $doFocus(this$static)):onAttach_0(new DominoElement(this$static.inputElement.wrappedElement), new ValueBox$lambda$10$Type(this$static)));
  }
}

function $nonfloating(this$static){
  var stringValue;
  $unfloatLabel(this$static);
  this$static.permaFloating = false;
  this$static.placeholder != null && (stringValue = $getValue_0(this$static) , !((stringValue == null || $trim(stringValue).length == 0) && this$static.floating)) && $removeAttribute(this$static.inputElement, 'placeholder');
  return this$static;
}

function $removeLabelColor(this$static, color_0){
  $remove_9(this$static.labelElement.style_0, color_0.getStyle());
}

function $setAutoValidation(this$static){
  !this$static.autoValidator && (this$static.autoValidator = $createAutoValidator(this$static, new ValueBox$2methodref$validate$Type(this$static)));
  $attach(this$static.autoValidator);
  return this$static;
}

function $setFixErrorsPosition(this$static, fixPosition){
  if (fixPosition) {
    $show(this$static.errorItem);
    $setMinHeight(this$static.errorItem.style_0, '25px');
  }
   else {
    $setMinHeight(this$static.errorItem.style_0, '0px');
  }
  return this$static.fixErrorsPosition = fixPosition , this$static;
}

function $setFloating(this$static, floating){
  floating?$floating(this$static):$nonfloating(this$static);
  return this$static;
}

function $setFocusColor(this$static, focusColor){
  $removeLabelColor(this$static, this$static.focusColor);
  $contains_3(this$static.fieldGroup.style_0, 'focused') && $add_4(this$static.labelElement.style_0, focusColor.getStyle());
  this$static.focusColor = focusColor;
  return this$static;
}

function $setLabel(this$static, label_0){
  var stringValue;
  $updateLabel(this$static, label_0);
  this$static.placeholder != null && (stringValue = $getValue_0(this$static) , !((stringValue == null || $trim(stringValue).length == 0) && this$static.floating)) && $removeAttribute(this$static.inputElement, 'placeholder');
  return this$static;
}

function $setLabelColor(this$static, color_0){
  $add_4(this$static.labelElement.style_0, color_0.getStyle());
}

function $setPlaceholder(this$static, placeholder){
  var stringValue;
  this$static.placeholder = placeholder;
  this$static.placeholder != null && (stringValue = $getValue_0(this$static) , (stringValue == null || $trim(stringValue).length == 0) && this$static.floating) && $setAttribute(this$static.inputElement, 'placeholder', this$static.placeholder);
  return this$static;
}

function $setReadOnly(this$static, readOnly){
  var floating, stringValue;
  if (readOnly) {
    $setAttribute(new DominoElement(this$static.inputElement.wrappedElement), 'disabled', 'true');
    $setAttribute(new DominoElement(this$static.inputElement.wrappedElement), 'readonly', 'true');
    $setAttribute_0(new DominoElement(this$static.inputElement.wrappedElement), 'floating', this$static.floating);
    $add_4(this$static.style_0, 'readonly');
    $floating(this$static);
  }
   else {
    $removeAttribute(new DominoElement(this$static.inputElement.wrappedElement), 'disabled');
    $removeAttribute(new DominoElement(this$static.inputElement.wrappedElement), 'readonly');
    $remove_9(this$static.style_0, 'readonly');
    $hasAttribute(new DominoElement(this$static.inputElement.wrappedElement), 'floating')?(floating = ($clinit_Boolean() , $equalsIgnoreCase($getAttribute(new DominoElement(this$static.inputElement.wrappedElement), 'floating')))):(floating = this$static.floating);
    floating?$floating(this$static):$nonfloating(this$static);
    stringValue = $getValue_0(this$static);
    !(stringValue == null || $trim(stringValue).length == 0) || $contains_3(this$static.fieldGroup.style_0, 'focused')?$floatLabel(this$static):$unfloatLabel(this$static);
  }
  return this$static;
}

function $tryFocus(this$static){
  (new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement.focus();
  $doFocus(this$static);
}

function $unfloatLabel(this$static){
  var stringValue;
  if (this$static.floating && !this$static.permaFloating && (stringValue = $getValue_0(this$static) , stringValue == null || $trim(stringValue).length == 0)) {
    $remove_9(this$static.fieldGroup.style_0, 'floating');
    this$static.floating = false;
  }
}

function $updateLabel(this$static, label_0){
  $remove_8(this$static.labelTextElement);
  $setTextContent(this$static.labelTextElement, label_0);
  $appendChild_0(new DominoElement(this$static.labelElement.wrappedElement), this$static.labelTextElement);
}

function $updateValidationStyles(this$static){
  var stringValue;
  $remove_9(this$static.fieldContainer.style_0, 'fc-' + this$static.focusColor.getStyle());
  $add_4(this$static.fieldContainer.style_0, ($clinit_Color() , 'fc-col-red'));
  $removeLabelColor(this$static, this$static.focusColor);
  $setLabelColor(this$static, RED);
  stringValue = $getValue_0(this$static);
  !(stringValue == null || $trim(stringValue).length == 0) || $contains_3(this$static.fieldGroup.style_0, 'focused')?$floatLabel(this$static):$unfloatLabel(this$static);
}

function ValueBox(){
  var stringValue, el;
  $clinit_Optional();
  this.elementValidations = new ElementValidations(this);
  this.requiredValidator = new RequiredValidator(this);
  this.errorLabels = new ArrayList;
  this.errors = new ArrayList;
  this.requiredIndicator = ($clinit_DominoFields() , $clinit_DominoFields() , of_1(' * '));
  this.fieldGroup = new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element);
  this.fieldContainer = new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element);
  this.inputContainer = new FlexItem;
  this.notesContainer = new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element);
  this.leftAddOnsContainer = new FlexLayout;
  this.rightAddOnsContainer = new FlexLayout;
  this.prefixItem = new FlexItem;
  this.postFixItem = new FlexItem;
  this.labelTextElement = new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement))).element);
  this.focusColor = ($clinit_Color() , BLUE);
  this.changeHandlers = new ArrayList;
  new ArrayList;
  this.helpItem = new FlexItem;
  this.countItem = castTo($hide(new FlexItem), 10);
  this.errorItem = new FlexItem;
  this.labelElement = new DominoElement($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('label'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['field-label'])).element);
  $init(this, this);
  this.inputElement = new DominoElement(castToNative((el = castToNative(castToNative(document_0.createElement('input'), $wnd.HTMLElement), $wnd.HTMLInputElement) , el.type = 'text' , new InputBuilder(el)).element, $wnd.HTMLInputElement));
  $addEventListener(this.inputElement, 'change', new ValueBox$lambda$0$Type(this));
  $addEventListener(this.inputElement, 'input', new ValueBox$lambda$1$Type(this));
  $css(this.fieldGroup, 'field-group');
  $css(this.fieldContainer, 'field-cntr');
  $css(this.notesContainer, 'notes-cntr');
  $css(this.leftAddOnsContainer, 'field-lft-addons');
  $css(this.rightAddOnsContainer, 'field-rgt-addons');
  $css(this.prefixItem, 'field-prefix');
  $css(this.postFixItem, 'field-postfix');
  this.inputElement.wrappedElement.hasAttribute('id') || $setAttribute(this.inputElement, 'id', this.inputElement.wrappedElement.getAttribute('domino-uuid'));
  $setAttribute(this.labelElement, 'for', this.inputElement.wrappedElement.getAttribute('id'));
  this.fieldInnerContainer = new FlexLayout;
  this.additionalInfoContainer = new FlexLayout;
  $appendChild_0(castTo($appendChild_0(this.fieldGroup, $appendChild_0(this.fieldContainer, $apply($appendChild_2(this.fieldInnerContainer, castTo($appendChild_0(castTo($appendChild_0($setFlexGrow(castTo($css(this.inputContainer, 'field-input-cntr'), 10)), this.labelElement), 10), this.inputElement), 10))))), 5), $appendChild_0(castTo($css(this.notesContainer, 'field-note'), 5), $appendChild_2($appendChild_2($appendChild_2(this.additionalInfoContainer, $setFlexGrow(castTo($css(this.helpItem, 'field-helper'), 10))), $setFlexGrow(castTo($css(castTo($hide(this.errorItem), 10), 'field-errors'), 10))), castTo($css(this.countItem, 'field-counter'), 10))));
  $setFocusColor(this, this.focusColor);
  $addEventListener(this.inputElement, 'focus', new ValueBox$lambda$7$Type(this));
  $addEventListener(this.inputElement, 'focusout', new ValueBox$lambda$8$Type(this));
  $addEventListener(this.labelElement, 'click', new ValueBox$lambda$9$Type(this));
  $updateLabel(this, '');
  this.placeholder != null && (stringValue = $getValue_0(this) , !((stringValue == null || $trim(stringValue).length == 0) && this.floating)) && $removeAttribute(this.inputElement, 'placeholder');
  $setAttribute_0(this.inputElement, 'spellcheck', true);
  $remove_9(this.style_0, 'lined');
  $add_4(this.style_0, 'lined');
  $ifPresent(INSTANCE_0.fixErrorsPosition, new ValueBox$0methodref$setFixErrorsPosition$Type(this));
  $ifPresent(INSTANCE_0.floatLabels, new ValueBox$1methodref$setFloating$Type(this));
  $ifPresent(INSTANCE_0.condensed, new ValueBox$lambda$4$Type(this));
}

defineClass(286, 285, {});
_.element_2 = function element_4(){
  return this.fieldGroup.wrappedElement;
}
;
_.floating = false;
_.permaFloating = false;
_.valid = true;
_.validateOnFocusLost = true;
var Lorg_dominokit_domino_ui_forms_ValueBox_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox', 286);
function $setReadOnly_0(this$static, readOnly){
  $toggleDisplay(this$static.countItem, !readOnly);
  return $setReadOnly(this$static, readOnly);
}

function $updateCharacterCount(this$static){
  var length_0, value_0;
  if (this$static.maxLength > 0 || this$static.minLength > 0) {
    $show(this$static.countItem);
    value_0 = $getValue_0(this$static);
    length_0 = 0;
    value_0 != null && (length_0 = value_0.length);
    length_0 < this$static.minLength && (length_0 = this$static.minLength);
    $setTextContent(this$static.countItem, length_0 + '/' + this$static.maxLength);
  }
   else {
    $hide(this$static.countItem);
  }
}

function $value_0(this$static, value_0){
  var stringValue;
  value_0 != null?(castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).value = value_0):(castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).value = '');
  stringValue = $getValue_0(this$static);
  !(stringValue == null || $trim(stringValue).length == 0) || $contains_3(this$static.fieldGroup.style_0, 'focused')?$floatLabel(this$static):$unfloatLabel(this$static);
  !!this$static.autoValidator && $validate(this$static.elementValidations);
  $forEach_0(this$static.changeHandlers, new ValueBox$lambda$6$Type(this$static));
  $updateCharacterCount(this$static);
  return this$static;
}

defineClass(287, 286, {});
_.maxLength = 0;
_.minLength = 0;
var Lorg_dominokit_domino_ui_forms_AbstractValueBox_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'AbstractValueBox', 287);
function AbstractValueBox$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(288, 1, {}, AbstractValueBox$lambda$0$Type);
_.handleEvent = function handleEvent_0(arg0){
  $updateCharacterCount(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_AbstractValueBox$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'AbstractValueBox/lambda$0$Type', 288);
function BasicFormElement$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(299, 1, $intern_22, BasicFormElement$lambda$0$Type);
_.accept = function accept_5(arg0){
  $lambda$0_0(this.$$outer_0, castToString(arg0));
}
;
var Lorg_dominokit_domino_ui_forms_BasicFormElement$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'BasicFormElement/lambda$0$Type', 299);
function $clinit_DominoFields(){
  $clinit_DominoFields = emptyMethod;
  INSTANCE_0 = new DominoFields;
}

function DominoFields(){
  this.fixErrorsPosition = ($clinit_Optional() , $clinit_Optional() , EMPTY);
  this.floatLabels = (null , EMPTY);
  this.condensed = (null , EMPTY);
}

defineClass(320, 1, {}, DominoFields);
var INSTANCE_0;
var Lorg_dominokit_domino_ui_forms_DominoFields_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'DominoFields', 320);
function $appendRequiredIndicator(valueBox, requiredIndicator){
  new DominoElement(valueBox.labelElement.wrappedElement);
  $hasDirectChild(new DominoElement(valueBox.labelElement.wrappedElement), requiredIndicator) && $removeChild(new DominoElement(valueBox.labelElement.wrappedElement), requiredIndicator);
  $appendChild(new DominoElement(valueBox.labelElement.wrappedElement), requiredIndicator);
}

function $removeRequiredIndicator(valueBox, requiredIndicator){
  new DominoElement(valueBox.labelElement.wrappedElement);
  $hasDirectChild(new DominoElement(valueBox.labelElement.wrappedElement), requiredIndicator) && $removeChild(new DominoElement(valueBox.labelElement.wrappedElement), requiredIndicator);
}

function $createAutoValidator(this$static, autoValidate){
  return new InputAutoValidator(new DominoElement(this$static.inputElement.wrappedElement), autoValidate);
}

function $getValue_0(this$static){
  var value_0;
  value_0 = castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).value;
  if (value_0.length == 0 && this$static.emptyAsNull) {
    return null;
  }
  return value_0;
}

function TextBox(){
  ValueBox.call(this);
  new MinLengthValidator(this);
  $addEventListener(new DominoElement(this.inputElement.wrappedElement), 'input', new AbstractValueBox$lambda$0$Type(this));
}

defineClass(89, 287, {89:1}, TextBox);
_.emptyAsNull = false;
var Lorg_dominokit_domino_ui_forms_TextBox_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'TextBox', 89);
function ValueBox$0methodref$setFixErrorsPosition$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(291, 1, $intern_22, ValueBox$0methodref$setFixErrorsPosition$Type);
_.accept = function accept_6(arg0){
  $setFixErrorsPosition(this.$$outer_0, $booleanValue(castToBoolean(arg0)));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$0methodref$setFixErrorsPosition$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/0methodref$setFixErrorsPosition$Type', 291);
function ValueBox$1methodref$setFloating$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(292, 1, $intern_22, ValueBox$1methodref$setFloating$Type);
_.accept = function accept_7(arg0){
  $setFloating(this.$$outer_0, $booleanValue(castToBoolean(arg0)));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$1methodref$setFloating$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/1methodref$setFloating$Type', 292);
function ValueBox$2methodref$validate$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(298, 1, {}, ValueBox$2methodref$validate$Type);
var Lorg_dominokit_domino_ui_forms_ValueBox$2methodref$validate$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/2methodref$validate$Type', 298);
defineClass(324, 1, {});
var Lorg_dominokit_domino_ui_forms_ValueBox$AutoValidator_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/AutoValidator', 324);
function ValueBox$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(289, 1, {}, ValueBox$lambda$0$Type);
_.handleEvent = function handleEvent_1(arg0){
  $callChangeHandlers(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$0$Type', 289);
function ValueBox$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(290, 1, {}, ValueBox$lambda$1$Type);
_.handleEvent = function handleEvent_2(arg0){
  $lambda$1(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$1$Type', 290);
function ValueBox$lambda$10$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(297, 1, {}, ValueBox$lambda$10$Type);
_.onObserved = function onObserved(arg0){
  $tryFocus(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$10$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$10$Type', 297);
function ValueBox$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(293, 1, $intern_22, ValueBox$lambda$4$Type);
_.accept = function accept_8(arg0){
  $lambda$4(this.$$outer_0, castToBoolean(arg0));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$4$Type', 293);
function ValueBox$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(148, 1, $intern_22, ValueBox$lambda$6$Type);
_.accept = function accept_9(arg0){
  var lastArg;
  null.$_nullMethod($getValue_0((lastArg = this.$$outer_0 , throwClassCastExceptionUnlessNull(arg0) , lastArg)));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$6$Type', 148);
function ValueBox$lambda$7$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(294, 1, {}, ValueBox$lambda$7$Type);
_.handleEvent = function handleEvent_3(arg0){
  $doFocus(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$7$Type', 294);
function ValueBox$lambda$8$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(295, 1, {}, ValueBox$lambda$8$Type);
_.handleEvent = function handleEvent_4(arg0){
  $lambda$8(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$8$Type', 295);
function ValueBox$lambda$9$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(296, 1, {}, ValueBox$lambda$9$Type);
_.handleEvent = function handleEvent_5(arg0){
  $lambda$9(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$9$Type', 296);
function $addValidator_0(this$static, validator){
  $add_2(this$static.validators, validator);
}

function $validate(this$static){
  var entry, outerIter, result, validator, validator$iterator;
  $clearInvalid(this$static.element);
  if ($hasAttribute(new DominoElement(this$static.element.inputElement.wrappedElement), 'disabled')) {
    return new ValidationResult;
  }
  for (validator$iterator = (outerIter = (new AbstractMap$1(this$static.validators.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter)); validator$iterator.val$outerIter2.hasNext_0();) {
    validator = (entry = castTo(validator$iterator.val$outerIter2.next_1(), 23) , castTo(entry.getKey(), 378));
    result = validator.isValid();
    if (!result.valid) {
      $invalidate(this$static.element, result.errorMessage);
      return result;
    }
  }
  return new ValidationResult;
}

function ElementValidations(element){
  this.validators = new LinkedHashSet;
  this.element = element;
}

defineClass(327, 1, {}, ElementValidations);
var Lorg_dominokit_domino_ui_forms_validations_ElementValidations_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'ElementValidations', 327);
function $attach(this$static){
  this$static.eventListener = new InputAutoValidator$lambda$0$Type(this$static);
  $addEventListener_0(this$static.inputElement, ($clinit_EventType() , blur_0), this$static.eventListener);
}

function InputAutoValidator(inputElement, autoValidate){
  this.autoValidate = autoValidate;
  this.inputElement = inputElement;
}

defineClass(325, 324, {}, InputAutoValidator);
var Lorg_dominokit_domino_ui_forms_validations_InputAutoValidator_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'InputAutoValidator', 325);
function InputAutoValidator$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(326, 1, {}, InputAutoValidator$lambda$0$Type);
_.handleEvent = function handleEvent_6(arg0){
  $validate(this.$$outer_0.autoValidate.$$outer_0.elementValidations);
}
;
var Lorg_dominokit_domino_ui_forms_validations_InputAutoValidator$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'InputAutoValidator/lambda$0$Type', 326);
function MinLengthValidator(valueBox){
  this.valueBox = valueBox;
}

defineClass(363, 1, {378:1}, MinLengthValidator);
_.isValid = function isValid(){
  if ((new DominoElement(this.valueBox.inputElement.wrappedElement)).wrappedElement.validity.tooShort) {
    return new ValidationResult_0(false, 'Minimum length is ' + this.valueBox.minLength);
  }
  return new ValidationResult;
}
;
var Lorg_dominokit_domino_ui_forms_validations_MinLengthValidator_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'MinLengthValidator', 363);
function RequiredValidator(element){
  this.element = element;
}

defineClass(319, 1, {378:1}, RequiredValidator);
_.isValid = function isValid_0(){
  var stringValue;
  stringValue = $getValue_0(this.element);
  if (stringValue == null || $trim(stringValue).length == 0) {
    return new ValidationResult_0(false, $getRequiredErrorMessage(this.element));
  }
  return new ValidationResult;
}
;
var Lorg_dominokit_domino_ui_forms_validations_RequiredValidator_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'RequiredValidator', 319);
function ValidationResult(){
  ValidationResult_0.call(this, true, '');
}

function ValidationResult_0(valid, errorMessage){
  this.valid = valid;
  this.errorMessage = errorMessage;
}

defineClass(41, 1, {41:1}, ValidationResult, ValidationResult_0);
_.valid = false;
var Lorg_dominokit_domino_ui_forms_validations_ValidationResult_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'ValidationResult', 41);
function $onLarge(this$static, onLarge){
  !!this$static.onLargeStyle && $remove_9(this$static.style_0, 'span-l' + this$static.onLargeStyle.span_0.postfix);
  this$static.onLargeStyle = onLarge;
  $add_4(this$static.style_0, 'span-l' + this$static.onLargeStyle.span_0.postfix);
  return this$static;
}

function $onMedium(this$static, onMedium){
  !!this$static.onMediumStyle && $remove_9(this$static.style_0, 'span-m' + this$static.onMediumStyle.span_0.postfix);
  this$static.onMediumStyle = onMedium;
  $add_4(this$static.style_0, 'span-m' + this$static.onMediumStyle.span_0.postfix);
  return this$static;
}

function $onSmall(this$static, onSmall){
  !!this$static.onSmallStyle && $remove_9(this$static.style_0, 'span-s' + this$static.onSmallStyle.span_0.postfix);
  this$static.onSmallStyle = onSmall;
  $add_4(this$static.style_0, 'span-s' + this$static.onSmallStyle.span_0.postfix);
  return this$static;
}

function $onXLarge(this$static, onXLarge){
  !!this$static.onXLargeStyle && $remove_9(this$static.style_0, 'span-xl' + this$static.onXLargeStyle.span_0.postfix);
  this$static.onXLargeStyle = onXLarge;
  $add_4(this$static.style_0, 'span-xl' + this$static.onXLargeStyle.span_0.postfix);
  return this$static;
}

function $onXSmall(this$static, onXSmall){
  !!this$static.onXSmallStyle && $remove_9(this$static.style_0, 'span-xs' + this$static.onXSmallStyle.span_0.postfix);
  this$static.onXSmallStyle = onXSmall;
  $add_4(this$static.style_0, 'span-xs' + this$static.onXSmallStyle.span_0.postfix);
  return this$static;
}

function Column(){
  $clinit_Optional();
  this.column = new DominoElement($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['grid-col'])).element);
  $init(this, this);
}

defineClass(31, 22, {31:1}, Column);
_.element_2 = function element_5(){
  return castToNative(this.column.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lorg_dominokit_domino_ui_grid_Column_2_classLit = createForClass('org.dominokit.domino.ui.grid', 'Column', 31);
function Column$OnLarge(span_0){
  this.span_0 = span_0;
}

defineClass(63, 1, {}, Column$OnLarge);
var Lorg_dominokit_domino_ui_grid_Column$OnLarge_2_classLit = createForClass('org.dominokit.domino.ui.grid', 'Column/OnLarge', 63);
function Column$OnMedium(span_0){
  this.span_0 = span_0;
}

defineClass(64, 1, {}, Column$OnMedium);
var Lorg_dominokit_domino_ui_grid_Column$OnMedium_2_classLit = createForClass('org.dominokit.domino.ui.grid', 'Column/OnMedium', 64);
function Column$OnSmall(span_0){
  this.span_0 = span_0;
}

defineClass(65, 1, {}, Column$OnSmall);
var Lorg_dominokit_domino_ui_grid_Column$OnSmall_2_classLit = createForClass('org.dominokit.domino.ui.grid', 'Column/OnSmall', 65);
function Column$OnXLarge(span_0){
  this.span_0 = span_0;
}

defineClass(62, 1, {}, Column$OnXLarge);
var Lorg_dominokit_domino_ui_grid_Column$OnXLarge_2_classLit = createForClass('org.dominokit.domino.ui.grid', 'Column/OnXLarge', 62);
function Column$OnXSmall(span_0){
  this.span_0 = span_0;
}

defineClass(66, 1, {}, Column$OnXSmall);
var Lorg_dominokit_domino_ui_grid_Column$OnXSmall_2_classLit = createForClass('org.dominokit.domino.ui.grid', 'Column/OnXSmall', 66);
function $clinit_Column$Span(){
  $clinit_Column$Span = emptyMethod;
  _1 = new Column$Span('_1', 0, '-1');
  _2 = new Column$Span('_2', 1, '-2');
  _3 = new Column$Span('_3', 2, '-3');
  _4 = new Column$Span('_4', 3, '-4');
  _5 = new Column$Span('_5', 4, '-5');
  _6 = new Column$Span('_6', 5, '-6');
  _7 = new Column$Span('_7', 6, '-7');
  _8 = new Column$Span('_8', 7, '-8');
  _9 = new Column$Span('_9', 8, '-9');
  _10 = new Column$Span('_10', 9, '-10');
  _11 = new Column$Span('_11', 10, '-11');
  _12 = new Column$Span('_12', 11, '-12');
  _13 = new Column$Span('_13', 12, '-13');
  _14 = new Column$Span('_14', 13, '-14');
  _15 = new Column$Span('_15', 14, '-15');
  _16 = new Column$Span('_16', 15, '-16');
  _17 = new Column$Span('_17', 16, '-17');
  _18 = new Column$Span('_18', 17, '-18');
  _19 = new Column$Span('_19', 18, '-19');
  _20 = new Column$Span('_20', 19, '-20');
  _21 = new Column$Span('_21', 20, '-21');
  _22 = new Column$Span('_22', 21, '-22');
  _23 = new Column$Span('_23', 22, '-23');
  _24 = new Column$Span('_24', 23, '-24');
  _25 = new Column$Span('_25', 24, '-25');
  _26 = new Column$Span('_26', 25, '-26');
  _27 = new Column$Span('_27', 26, '-27');
  _28 = new Column$Span('_28', 27, '-28');
  _29 = new Column$Span('_29', 28, '-29');
  _30 = new Column$Span('_30', 29, '-30');
  _31 = new Column$Span('_31', 30, '-31');
  _32 = new Column$Span('_32', 31, '-32');
  _full = new Column$Span('_full', 32, '-full');
}

function Column$Span(enum$name, enum$ordinal, postfix){
  Enum.call(this, enum$name, enum$ordinal);
  this.postfix = postfix;
}

function of_0(columns){
  $clinit_Column$Span();
  switch (columns) {
    case 1:
      return _1;
    case 2:
      return _2;
    case 3:
      return _3;
    case 4:
      return _4;
    case 5:
      return _5;
    case 6:
      return _6;
    case 7:
      return _7;
    case 8:
      return _8;
    case 9:
      return _9;
    case 10:
      return _10;
    case 11:
      return _11;
    case 12:
      return _12;
    case 13:
      return _13;
    case 14:
      return _14;
    case 15:
      return _15;
    case 16:
      return _16;
    case 17:
      return _17;
    case 18:
      return _18;
    case 19:
      return _19;
    case 20:
      return _20;
    case 21:
      return _21;
    case 22:
      return _22;
    case 23:
      return _23;
    case 24:
      return _24;
    case 25:
      return _25;
    case 26:
      return _26;
    case 27:
      return _27;
    case 28:
      return _28;
    case 29:
      return _29;
    case 30:
      return _30;
    case 31:
      return _31;
    case 32:
      return _32;
    default:return _full;
  }
}

function values_4(){
  $clinit_Column$Span();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_grid_Column$Span_2_classLit, 1), $intern_1, 16, 0, [_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _full]);
}

defineClass(16, 13, {3:1, 20:1, 13:1, 16:1}, Column$Span);
var _1, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _2, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _3, _30, _31, _32, _4, _5, _6, _7, _8, _9, _full;
var Lorg_dominokit_domino_ui_grid_Column$Span_2_classLit = createForEnum('org.dominokit.domino.ui.grid', 'Column/Span', 16, values_4);
function $clinit_Columns(){
  $clinit_Columns = emptyMethod;
  _12_0 = new Columns('_12', 0, 'row-12');
  _16_0 = new Columns('_16', 1, 'row-16');
  _18_0 = new Columns('_18', 2, 'row-18');
  _24_0 = new Columns('_24', 3, 'row-24');
  _32_0 = new Columns('_32', 4, 'row-32');
}

function Columns(enum$name, enum$ordinal, columnsStyle){
  Enum.call(this, enum$name, enum$ordinal);
  this.columnsStyle = columnsStyle;
}

function values_5(){
  $clinit_Columns();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_grid_Columns_2_classLit, 1), $intern_1, 57, 0, [_12_0, _16_0, _18_0, _24_0, _32_0]);
}

defineClass(57, 13, {3:1, 20:1, 13:1, 57:1}, Columns);
var _12_0, _16_0, _18_0, _24_0, _32_0;
var Lorg_dominokit_domino_ui_grid_Columns_2_classLit = createForEnum('org.dominokit.domino.ui.grid', 'Columns', 57, values_5);
function $addColumn(this$static, column){
  return this$static.row.appendChild(castToNative(column.column.wrappedElement, $wnd.HTMLDivElement)) , this$static;
}

function Row(columns){
  $clinit_Optional();
  this.row = castToNative($css_0($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['grid-row'])), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, [columns.columnsStyle])).element, $wnd.HTMLDivElement);
}

defineClass(214, 22, {});
_.element_2 = function element_6(){
  return this.row;
}
;
var Lorg_dominokit_domino_ui_grid_Row_2_classLit = createForClass('org.dominokit.domino.ui.grid', 'Row', 214);
function Row_12(){
  Row.call(this, ($clinit_Columns() , _12_0));
  $init(this, this);
}

defineClass(125, 214, {}, Row_12);
var Lorg_dominokit_domino_ui_grid_Row_112_2_classLit = createForClass('org.dominokit.domino.ui.grid', 'Row_12', 125);
function $clinit_FlexAlign(){
  $clinit_FlexAlign = emptyMethod;
  START = new FlexAlign('START', 0, 'flex-start');
  END = new FlexAlign('END', 1, 'flex-end');
  CENTER = new FlexAlign('CENTER', 2, 'center');
  STRETCH = new FlexAlign('STRETCH', 3, 'stretch');
  BASE_LINE = new FlexAlign('BASE_LINE', 4, 'baseline');
}

function FlexAlign(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.value_0 = value_0;
}

function values_6(){
  $clinit_FlexAlign();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_grid_flex_FlexAlign_2_classLit, 1), $intern_1, 58, 0, [START, END, CENTER, STRETCH, BASE_LINE]);
}

defineClass(58, 13, {3:1, 20:1, 13:1, 58:1, 422:1}, FlexAlign);
var BASE_LINE, CENTER, END, START, STRETCH;
var Lorg_dominokit_domino_ui_grid_flex_FlexAlign_2_classLit = createForEnum('org.dominokit.domino.ui.grid.flex', 'FlexAlign', 58, values_6);
function $setAlignSelf(this$static, alignSelf){
  $setProperty(this$static.style_0, 'align-self', alignSelf.value_0);
  return this$static;
}

function $setFlexGrow(this$static){
  $setProperty(this$static.style_0, 'flex-grow', '1');
  return this$static;
}

function FlexItem(){
  FlexItem_0.call(this, castToNative((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element, $wnd.HTMLDivElement));
}

function FlexItem_0(root){
  BaseDominoElement.call(this);
  this.element = root;
  $init(this, this);
  $add_4(this.style_0, 'flex-item');
}

defineClass(10, 22, {10:1}, FlexItem);
_.element_2 = function element_7(){
  return this.element;
}
;
var Lorg_dominokit_domino_ui_grid_flex_FlexItem_2_classLit = createForClass('org.dominokit.domino.ui.grid.flex', 'FlexItem', 10);
function $appendChild_2(this$static, flexItem){
  $add_0(this$static.flexItems, flexItem);
  $appendChild(this$static, flexItem.element);
  return this$static;
}

function FlexLayout(){
  $clinit_Optional();
  this.element = new DominoElement($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['flex-layout'])).element);
  this.flexItems = new ArrayList;
  $init(this, this);
}

defineClass(34, 22, {34:1}, FlexLayout);
_.element_2 = function element_8(){
  return castToNative(this.element.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lorg_dominokit_domino_ui_grid_flex_FlexLayout_2_classLit = createForClass('org.dominokit.domino.ui.grid.flex', 'FlexLayout', 34);
function $addClickListener_0(this$static, listener){
  $addEventListener(this$static.icon_0, ($clinit_EventType() , click_0).name_0, listener);
  return this$static;
}

function $clickable(this$static){
  $add_4(this$static.style_0, 'clickable-icon');
  this$static.wavesSupport_0 = $initWaves_0(new WavesSupport(this$static.element_0.element_2()));
  return this$static;
}

function $setClickable(this$static, clickable){
  if (clickable) {
    $add_4(this$static.style_0, 'clickable-icon');
    this$static.wavesSupport_0 = $initWaves_0(new WavesSupport(this$static.element_0.element_2()));
  }
   else {
    $remove_9(this$static.style_0, 'clickable-icon');
    !!this$static.wavesSupport_0 && $removeWaves_0(this$static.wavesSupport_0);
  }
  return this$static;
}

function $setColor(this$static, color_0){
  if (!color_0)
    return this$static;
  !!this$static.color_0 && $remove_9(this$static.icon_0.style_0, this$static.color_0.getStyle());
  $add_4(this$static.icon_0.style_0, color_0.getStyle());
  this$static.color_0 = color_0;
  return this$static;
}

function BaseIcon(){
  BaseDominoElement.call(this);
}

defineClass(141, 22, {});
_.element_2 = function element_9(){
  return this.icon_0.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_icons_BaseIcon_2_classLit = createForClass('org.dominokit.domino.ui.icons', 'BaseIcon', 141);
function Icon(icon){
  BaseIcon.call(this);
  this.icon_0 = new DominoElement(icon);
  $init(this, this);
}

function create_2(icon){
  var iconElement;
  iconElement = new Icon($textContent($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('i'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['material-icons'])), icon).element);
  iconElement.name_0 = icon;
  return iconElement;
}

defineClass(207, 141, {}, Icon);
_.element_2 = function element_10(){
  return this.icon_0.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_icons_Icon_2_classLit = createForClass('org.dominokit.domino.ui.icons', 'Icon', 207);
function $setSize_0(this$static, mdiSize){
  !!this$static.mdiSize && $remove_9(this$static.style_0, this$static.mdiSize.style_0);
  this$static.mdiSize = mdiSize;
  $add_4(this$static.style_0, this$static.mdiSize.style_0);
  return this$static;
}

function MdiIcon(icon){
  BaseIcon.call(this);
  this.icon_0 = new DominoElement($css_0($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('i'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['mdi'])), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, [icon])).element);
  this.name_0 = icon;
  $init(this, this);
  $setSize_0(this, ($clinit_MdiIcon$MdiSize() , mdi24));
}

defineClass(85, 141, {85:1}, MdiIcon);
_.element_2 = function element_11(){
  return this.icon_0.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_icons_MdiIcon_2_classLit = createForClass('org.dominokit.domino.ui.icons', 'MdiIcon', 85);
function $clinit_MdiIcon$MdiSize(){
  $clinit_MdiIcon$MdiSize = emptyMethod;
  mdi18 = new MdiIcon$MdiSize('mdi18', 0, 'mdi-18px');
  mdi24 = new MdiIcon$MdiSize('mdi24', 1, 'mdi-24px');
  mdi36 = new MdiIcon$MdiSize('mdi36', 2, 'mdi-36px');
  mdi48 = new MdiIcon$MdiSize('mdi48', 3, 'mdi-48px');
}

function MdiIcon$MdiSize(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_7(){
  $clinit_MdiIcon$MdiSize();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_icons_MdiIcon$MdiSize_2_classLit, 1), $intern_1, 69, 0, [mdi18, mdi24, mdi36, mdi48]);
}

defineClass(69, 13, {3:1, 20:1, 13:1, 69:1}, MdiIcon$MdiSize);
var mdi18, mdi24, mdi36, mdi48;
var Lorg_dominokit_domino_ui_icons_MdiIcon$MdiSize_2_classLit = createForEnum('org.dominokit.domino.ui.icons', 'MdiIcon/MdiSize', 69, values_7);
function $addHandler(this$static, handlerContext){
  $putStringValue(this$static.handlers, 'enter', handlerContext);
  return this$static;
}

function $lambda$0_1(this$static, evt_0){
  var handlerContext, key, keyboardEvent;
  keyboardEvent = evt_0;
  if (keyboardEvent.key == null)
    return;
  key = keyboardEvent.key.toLowerCase();
  handlerContext = null;
  keyboardEvent.ctrlKey && $hasStringValue(this$static.ctrlHandlers, key)?(handlerContext = castTo($getStringValue(this$static.ctrlHandlers, key), 99)):$hasStringValue(this$static.handlers, key) && (handlerContext = castTo($getStringValue(this$static.handlers, key), 99));
  !!handlerContext && $handleEvent(handlerContext.handler, evt_0);
}

function KeyboardEvents(element){
  this.handlers = new HashMap;
  this.ctrlHandlers = new HashMap;
  element.addEventListener('keydown', new KeyboardEvents$lambda$0$Type(this));
}

defineClass(364, 1, {}, KeyboardEvents);
var Lorg_dominokit_domino_ui_keyboard_KeyboardEvents_2_classLit = createForClass('org.dominokit.domino.ui.keyboard', 'KeyboardEvents', 364);
function KeyboardEvents$HandlerContext(handler){
  this.handler = handler;
}

defineClass(99, 1, {99:1}, KeyboardEvents$HandlerContext);
var Lorg_dominokit_domino_ui_keyboard_KeyboardEvents$HandlerContext_2_classLit = createForClass('org.dominokit.domino.ui.keyboard', 'KeyboardEvents/HandlerContext', 99);
function KeyboardEvents$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(365, 1, {}, KeyboardEvents$lambda$0$Type);
_.handleEvent = function handleEvent_7(arg0){
  $lambda$0_1(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_keyboard_KeyboardEvents$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.keyboard', 'KeyboardEvents/lambda$0$Type', 365);
function Content(){
  $clinit_Optional();
  this.contentContainer = castToNative($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['content-panel'])).element, $wnd.HTMLDivElement);
  this.section = $add_7($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('section'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['content'])), this.contentContainer).element;
  $init(this, this);
}

defineClass(238, 22, {}, Content);
_.element_2 = function element_12(){
  return this.section;
}
;
var Lorg_dominokit_domino_ui_layout_Content_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Content', 238);
function $fixed(this$static){
  $add_4(this$static.element.style_0, 'fixed');
  this$static.fixed_0 = true;
  return this$static;
}

function $unfixed(this$static){
  $remove_9(this$static.element.style_0, 'fixed');
  this$static.fixed_0 = false;
  return this$static;
}

function Footer(){
  $clinit_Optional();
  this.element = new DominoElement($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('footer'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['footer'])).element);
  $init(this, this);
  $hide_0(this.collapsible_0);
}

defineClass(239, 22, {}, Footer);
_.element_2 = function element_13(){
  return this.element.wrappedElement;
}
;
_.autoUnFixForSmallScreens = true;
_.fixed_0 = false;
var Lorg_dominokit_domino_ui_layout_Footer_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Footer', 239);
function $hideLeftPanel(this$static){
  if (!this$static.fixedLeftPanel) {
    $add_4((new DominoElement(this$static.section.leftSide)).style_0, 'slide-out-left');
    this$static.leftPanelVisible = false;
    $hideOverlay(this$static);
    $styler(new DominoElement(($clinit_DomGlobal() , document_0).body), new Layout$lambda$9$Type);
    $forEach_0(this$static.leftPanelHandlers, new Layout$lambda$10$Type);
  }
  return this$static;
}

function $hideOverlay(this$static){
  if (this$static.overlayVisible) {
    $setDisplay(this$static.overlay.style_0, 'none');
    this$static.overlayVisible = false;
  }
}

function $hidePanels(this$static){
  $hideRightPanel(this$static);
  $hideLeftPanel(this$static);
  $hideOverlay(this$static);
}

function $hideRightPanel(this$static){
  $add_4((new DominoElement(this$static.section.rightSide)).style_0, 'slide-out-right');
  this$static.rightPanelVisible = false;
  $hideOverlay(this$static);
  return this$static;
}

function $lambda$11(this$static){
  $setPaddingBottom(new Style(new Style$lambda$0$Type(this$static.content_0.section)), this$static.footer.element.wrappedElement.clientHeight + 'px');
}

function $lambda$2(this$static){
  if (this$static.footer.autoUnFixForSmallScreens && this$static.footer.fixed_0) {
    this$static.fixedFooter = true;
    $unfixed(this$static.footer);
    onAttach(this$static.footer.element.wrappedElement, new Layout$lambda$12$Type(this$static));
  }
}

function $lambda$4_0(this$static){
  this$static.footer.autoUnFixForSmallScreens && ($clinit_Boolean() , (this$static.fixedFooter?true:false) != null) && this$static.fixedFooter && false && ($fixed(this$static.footer) , $isAttached(this$static.footer)?$setPaddingBottom(new Style(new Style$lambda$0$Type(this$static.content_0.section)), this$static.footer.element.wrappedElement.clientHeight + 'px'):onAttach(this$static.footer.element.wrappedElement, new Layout$lambda$11$Type(this$static)) , this$static);
}

function $lambda$5(this$static){
  return this$static.leftPanelVisible?$hideLeftPanel(this$static):(this$static.rightPanelVisible && $hideRightPanel(this$static) , $remove_9((new DominoElement(this$static.section.leftSide)).style_0, 'slide-out-left') , this$static.leftPanelVisible = true , $showOverlay(this$static) , $styler(new DominoElement(($clinit_DomGlobal() , document_0).body), new Layout$lambda$7$Type) , $forEach_0(this$static.leftPanelHandlers, new Layout$lambda$8$Type) , this$static) , this$static;
}

function $show_1(this$static, theme){
  $apply_0(new Theme(theme));
  $isAttached(this$static.root_0) || ($clinit_DomGlobal() , document_0).body.appendChild(this$static.root_0.wrappedElement);
  return this$static;
}

function $showOverlay(this$static){
  if (!this$static.overlayVisible) {
    $setDisplay(this$static.overlay.style_0, 'block');
    this$static.overlayVisible = true;
  }
}

function Layout(){
  $clinit_Optional();
  this.root_0 = new DominoElement($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['layout'])).element);
  this.navigationBar = new NavigationBar;
  this.section = new Section;
  this.overlay = new Overlay;
  this.content_0 = new Content;
  this.footer = new Footer;
  this.appTitle = document_0.createTextNode('');
  this.leftPanelSize = ($clinit_Layout$LeftPanelSize() , DEFAULT);
  this.leftPanelHandlers = new ArrayList;
  $init(this, this);
  this.navigationBar.title_0.wrappedElement.hasChildNodes() && $removeChild(this.navigationBar.title_0, this.appTitle);
  this.appTitle = of_1('Qwirkle');
  $appendChild(this.navigationBar.title_0, this.appTitle);
  $appendChild(this.root_0, this.overlay.element);
  $appendChild(this.root_0, this.navigationBar.navBar.wrappedElement);
  $appendChild(this.root_0, this.section.section);
  $appendChild(this.root_0, this.content_0.section);
  $appendChild(this.root_0, this.footer.element.wrappedElement);
  $appendChild(this.navigationBar.title_0, this.appTitle);
  $css(this.navigationBar, 'nav-fixed');
  $remove_9(this.navigationBar.style_0, 'ls-closed');
  $add_4((new DominoElement(this.section.leftSide)).style_0, 'slide-out-left');
  $add_4((new DominoElement(this.section.rightSide)).style_0, 'slide-out-right');
  $addEventListener(this.navigationBar.menu, 'click', new Layout$lambda$5$Type(this));
  $addEventListener(this.overlay, 'click', new Layout$lambda$6$Type(this));
  $contains_3(new Style(new Style$lambda$0$Type(document_0.body)), 'ls-hidden') || $add_4(new Style(new Style$lambda$0$Type(document_0.body)), 'ls-closed');
  $apply_0(new Theme(($clinit_Theme() , INDIGO_2)));
  $add_4((new DominoElement(document_0.body)).style_0, this.leftPanelSize.size_0);
  $clinit_MediaQuery();
  addListener(new Layout$lambda$2$Type(this), smallAndDownMediaQueryList);
  addListener(new Layout$lambda$3$Type, smallAndDownMediaQueryList);
  addListener(new Layout$lambda$4$Type(this), mediumAndUpMediaQueryList);
}

defineClass(159, 22, {}, Layout);
_.element_2 = function element_14(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
_.fixedFooter = false;
_.fixedLeftPanel = false;
_.leftPanelVisible = false;
_.overlayVisible = false;
_.rightPanelVisible = false;
var Lorg_dominokit_domino_ui_layout_Layout_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout', 159);
function $clinit_Layout$LeftPanelSize(){
  $clinit_Layout$LeftPanelSize = emptyMethod;
  SMALL_0 = new Layout$LeftPanelSize('SMALL', 0, 'sm');
  DEFAULT = new Layout$LeftPanelSize('DEFAULT', 1, 'md');
  LARGE_0 = new Layout$LeftPanelSize('LARGE', 2, 'lg');
}

function Layout$LeftPanelSize(enum$name, enum$ordinal, size_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.size_0 = size_0;
}

function values_8(){
  $clinit_Layout$LeftPanelSize();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_layout_Layout$LeftPanelSize_2_classLit, 1), $intern_1, 84, 0, [SMALL_0, DEFAULT, LARGE_0]);
}

defineClass(84, 13, {3:1, 20:1, 13:1, 84:1}, Layout$LeftPanelSize);
var DEFAULT, LARGE_0, SMALL_0;
var Lorg_dominokit_domino_ui_layout_Layout$LeftPanelSize_2_classLit = createForEnum('org.dominokit.domino.ui.layout', 'Layout/LeftPanelSize', 84, values_8);
function Layout$lambda$10$Type(){
}

defineClass(190, 1, $intern_22, Layout$lambda$10$Type);
_.accept = function accept_10(arg0){
  castTo(arg0, 9).accept(($clinit_Boolean() , false));
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$10$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$10$Type', 190);
function Layout$lambda$11$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(191, 1, {}, Layout$lambda$11$Type);
_.onObserved = function onObserved_0(arg0){
  $lambda$11(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$11$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$11$Type', 191);
function Layout$lambda$12$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(192, 1, {}, Layout$lambda$12$Type);
_.onObserved = function onObserved_1(arg0){
  $removeProperty(new Style(new Style$lambda$0$Type(this.$$outer_0.content_0.section)), 'padding-bottom');
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$12$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$12$Type', 192);
function Layout$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(182, 1, {}, Layout$lambda$2$Type);
_.onMatch = function onMatch(){
  $lambda$2(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$2$Type', 182);
function Layout$lambda$3$Type(){
}

defineClass(183, 1, {}, Layout$lambda$3$Type);
_.onMatch = function onMatch_0(){
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$3$Type', 183);
function Layout$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(184, 1, {}, Layout$lambda$4$Type);
_.onMatch = function onMatch_1(){
  $lambda$4_0(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$4$Type', 184);
function Layout$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(185, 1, {}, Layout$lambda$5$Type);
_.handleEvent = function handleEvent_8(arg0){
  $lambda$5(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$5$Type', 185);
function Layout$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(186, 1, {}, Layout$lambda$6$Type);
_.handleEvent = function handleEvent_9(arg0){
  $hidePanels(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$6$Type', 186);
function Layout$lambda$7$Type(){
}

defineClass(187, 1, {}, Layout$lambda$7$Type);
_.applyStyles = function applyStyles(arg0){
  'panel-open'.length != 0 && arg0.element.classList.add('panel-open');
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$7$Type', 187);
function Layout$lambda$8$Type(){
}

defineClass(188, 1, $intern_22, Layout$lambda$8$Type);
_.accept = function accept_11(arg0){
  castTo(arg0, 9).accept(($clinit_Boolean() , true));
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$8$Type', 188);
function Layout$lambda$9$Type(){
}

defineClass(189, 1, {}, Layout$lambda$9$Type);
_.applyStyles = function applyStyles_0(arg0){
  'panel-open'.length != 0 && arg0.element.classList.remove('panel-open');
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$9$Type', 189);
function NavigationBar(){
  $clinit_Optional();
  this.navBar = new DominoElement($css_0($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('nav'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['navbar'])), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['ls-closed'])).element);
  this.container = castTo($css(new FlexLayout, 'container-fluid'), 34);
  this.title_0 = new DominoElement($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['navbar-brand'])).element);
  this.menu = new DominoElement($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['bars'])).element);
  this.topBar = new DominoElement($css_0($css_0($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('ul'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['nav'])), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['navbar-nav'])), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['navbar-right'])).element);
  this.topBarContainer = castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), this.topBar), 5);
  this.navBarHeader = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'navbar-header'), 5);
  this.menuToggleItem = castTo($css(new FlexItem, 'menu-toggle'), 10);
  this.logoItem = new FlexItem;
  this.titleItem = new FlexItem;
  this.actionBarItem = new FlexItem;
  $appendChild_2($appendChild_2($appendChild_2($appendChild_2(this.container, castTo($appendChild_0(this.menuToggleItem, this.menu), 10)), this.logoItem), castTo($appendChild_0($setFlexGrow(this.titleItem), this.title_0), 10)), castTo($appendChild_0(this.actionBarItem, this.topBarContainer), 10));
  $appendChild_0(this.navBar, $appendChild_0(this.navBarHeader, this.container));
  $init(this, this);
}

defineClass(236, 22, {}, NavigationBar);
_.element_2 = function element_15(){
  return this.navBar.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_layout_NavigationBar_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'NavigationBar', 236);
function Overlay(){
  $clinit_Optional();
  this.element = castToNative($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['overlay'])).element, $wnd.HTMLDivElement);
  $init(this, this);
}

defineClass(237, 22, {}, Overlay);
_.element_2 = function element_16(){
  return this.element;
}
;
var Lorg_dominokit_domino_ui_layout_Overlay_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Overlay', 237);
function Section(){
  $clinit_Optional();
  this.leftSide = $css_0($id(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('aside'), $wnd.HTMLElement)), 'leftsidebar'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['sidebar'])).element;
  this.rightSide = $style($css_0($css_0($id(new HtmlContentBuilder(castToNative(document_0.createElement('aside'), $wnd.HTMLElement)), 'rightsidebar'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['right-sidebar'])), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['overlay-open'])), 'height: calc(100vh - 70px); overflow-y: scroll;').element;
  this.section = $add_7($add_7(new HtmlContentBuilder(castToNative(document_0.createElement('section'), $wnd.HTMLElement)), this.leftSide), this.rightSide).element;
  $init(this, this);
}

defineClass(213, 22, {}, Section);
_.element_2 = function element_17(){
  return this.section;
}
;
var Lorg_dominokit_domino_ui_layout_Section_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Section', 213);
function $addItem(this$static, value_0){
  return $insertAt(this$static, this$static.items.array.length == 0?0:this$static.items.array.length, value_0, false);
}

function $deselect(this$static, listItem, silent){
  var deselected;
  if (listItem.selected && $indexOf_0(this$static.items, listItem, 0) != -1) {
    $setSelected(listItem, false, silent);
    if (!silent) {
      deselected = new ArrayList;
      deselected.array[deselected.array.length] = listItem;
      $forEach_0(this$static.deSelectionListeners, new ListGroup$lambda$32$Type);
    }
  }
  return this$static;
}

function $insertAt(this$static, index_0, value_0, silent){
  var added, li, listItem;
  if (index_0 == 0 || index_0 >= 0 && index_0 <= this$static.items.array.length) {
    li = castToNative($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('li'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['d-list-item'])).element, $wnd.HTMLLIElement);
    listItem = new ListItem(this$static, value_0, li);
    index_0 == this$static.items.array.length?$add_0(this$static.items, listItem):$add(this$static.items, index_0, listItem);
    this$static.items.array.length == 0?(this$static.element_0.element_2().appendChild(listItem.element) , this$static.element_0):$insertAfter(this$static, listItem.element, castTo($get_0(this$static.items, index_0), 74).element);
    this$static.itemRenderer.onRender(this$static, listItem);
    if (!silent) {
      added = new ArrayList;
      added.array[added.array.length] = listItem;
      $forEach_0(this$static.addListeners, new ListGroup$lambda$9$Type);
    }
  }
   else {
    throw toJs(new IndexOutOfBoundsException_0('index : [' + index_0 + '], size : [' + this$static.items.array.length + ']'));
  }
  return this$static;
}

function $removeItem(this$static, item_0, silent){
  var items;
  $remove_3(this$static.items, item_0);
  item_0.element.remove();
  if (!silent) {
    items = new ArrayList;
    items.array[items.array.length] = item_0;
    $forEach_0(this$static.removeListeners, new ListGroup$lambda$15$Type);
  }
  return this$static;
}

function $select(this$static, listItem, silent){
  var selected;
  if (!listItem.selected && $indexOf_0(this$static.items, listItem, 0) != -1) {
    !!this$static.lastSelected && $deselect_0(this$static.lastSelected);
    this$static.lastSelected = listItem;
    $setSelected(listItem, true, silent);
    if (!silent) {
      selected = new ArrayList;
      selected.array[selected.array.length] = listItem;
      $forEach_0(this$static.selectionListeners, new ListGroup$lambda$26$Type);
    }
  }
  return this$static;
}

function $setItemRenderer(this$static, itemRenderer){
  this$static.itemRenderer = itemRenderer;
  return this$static;
}

function $setItems(this$static, items){
  clear_0(this$static.element);
  new ArrayList_0(this$static.items);
  this$static.items.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
  $forEach_0(this$static.removeListeners, new ListGroup$lambda$4$Type);
  $forEach_0(items, new ListGroup$0methodref$addItem$Type(this$static));
  $forEach_0(this$static.addListeners, new ListGroup$lambda$3$Type(this$static));
  return this$static;
}

function ListGroup(){
  $clinit_Optional();
  this.items = new ArrayList;
  this.itemRenderer = new ListGroup$lambda$0$Type;
  this.removeListeners = new ArrayList;
  this.addListeners = new ArrayList;
  this.selectionListeners = new ArrayList;
  this.deSelectionListeners = new ArrayList;
  this.element = castToNative($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('ul'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['d-list', 'bordered'])).element, $wnd.HTMLUListElement);
  $init(this, this);
  $addClickListener(this, new ListGroup$lambda$1$Type);
}

defineClass(147, 22, {}, ListGroup);
_.element_2 = function element_18(){
  return this.element;
}
;
_.lastSelected = null;
var Lorg_dominokit_domino_ui_lists_ListGroup_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListGroup', 147);
function ListGroup$0methodref$addItem$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(278, 1, $intern_22, ListGroup$0methodref$addItem$Type);
_.accept = function accept_12(arg0){
  $addItem(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_lists_ListGroup$0methodref$addItem$Type_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListGroup/0methodref$addItem$Type', 278);
function ListGroup$lambda$0$Type(){
}

defineClass(276, 1, {}, ListGroup$lambda$0$Type);
_.onRender = function onRender(listGroup, listItem){
}
;
var Lorg_dominokit_domino_ui_lists_ListGroup$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListGroup/lambda$0$Type', 276);
function ListGroup$lambda$1$Type(){
}

defineClass(277, 1, {}, ListGroup$lambda$1$Type);
_.handleEvent = function handleEvent_10(arg0){
  arg0.stopPropagation();
  arg0.preventDefault();
}
;
var Lorg_dominokit_domino_ui_lists_ListGroup$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListGroup/lambda$1$Type', 277);
function ListGroup$lambda$15$Type(){
}

defineClass(282, 1, $intern_22, ListGroup$lambda$15$Type);
_.accept = function accept_13(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_lists_ListGroup$lambda$15$Type_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListGroup/lambda$15$Type', 282);
function ListGroup$lambda$26$Type(){
}

defineClass(283, 1, $intern_22, ListGroup$lambda$26$Type);
_.accept = function accept_14(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_lists_ListGroup$lambda$26$Type_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListGroup/lambda$26$Type', 283);
function ListGroup$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(279, 1, $intern_22, ListGroup$lambda$3$Type);
_.accept = function accept_15(arg0){
  var lastArg;
  null.$_nullMethod(new ArrayList_0((lastArg = this.$$outer_0 , throwClassCastExceptionUnlessNull(arg0) , lastArg).items));
}
;
var Lorg_dominokit_domino_ui_lists_ListGroup$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListGroup/lambda$3$Type', 279);
function ListGroup$lambda$32$Type(){
}

defineClass(284, 1, $intern_22, ListGroup$lambda$32$Type);
_.accept = function accept_16(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_lists_ListGroup$lambda$32$Type_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListGroup/lambda$32$Type', 284);
function ListGroup$lambda$4$Type(){
}

defineClass(280, 1, $intern_22, ListGroup$lambda$4$Type);
_.accept = function accept_17(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_lists_ListGroup$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListGroup/lambda$4$Type', 280);
function ListGroup$lambda$9$Type(){
}

defineClass(281, 1, $intern_22, ListGroup$lambda$9$Type);
_.accept = function accept_18(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_lists_ListGroup$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListGroup/lambda$9$Type', 281);
function $deselect_0(this$static){
  return $deselect(this$static.listGroup, this$static, false) , this$static;
}

function $setSelected(this$static, selected, silent){
  this$static.selected = selected;
  $remove_9(this$static.style_0, 'selected');
  selected && $add_4(this$static.style_0, 'selected');
  silent || $forEach_0(this$static.selectionChangedListeners, new ListItem$lambda$2$Type);
}

function $trySelect(this$static, evt){
  evt.stopPropagation();
  evt.preventDefault();
  this$static.selectable && this$static.enabled_0 && this$static.selectOnClick && (this$static.selected?($deselect(this$static.listGroup, this$static, false) , this$static):($select(this$static.listGroup, this$static, false) , this$static));
}

function ListItem(listGroup, value_0, element){
  $clinit_Optional();
  this.selectionChangedListeners = new ArrayList;
  this.value_0 = value_0;
  this.element = element;
  this.listGroup = listGroup;
  $init(this, this);
  element.setAttribute('tabindex', '0');
  $addClickListener(this, new ListItem$0methodref$trySelect$Type(this));
  $addHandler(new KeyboardEvents(element), new KeyboardEvents$HandlerContext(new ListItem$1methodref$trySelect$Type(this)));
}

defineClass(74, 22, {74:1}, ListItem);
_.element_2 = function element_19(){
  return this.element;
}
;
_.equals_0 = function equals_11(other){
  var listItem;
  if (this === other)
    return true;
  if (other == null || Lorg_dominokit_domino_ui_lists_ListItem_2_classLit != getClass__Ljava_lang_Class___devirtual$(other))
    return false;
  listItem = castTo(other, 74);
  return equals_Ljava_lang_Object__Z__devirtual$(this.value_0, listItem.value_0);
}
;
_.hashCode_0 = function hashCode_13(){
  return hashCode_8(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_0, 1, 5, [this.value_0]));
}
;
_.enabled_0 = true;
_.selectOnClick = true;
_.selectable = true;
_.selected = false;
var Lorg_dominokit_domino_ui_lists_ListItem_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListItem', 74);
function ListItem$0methodref$trySelect$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(359, 1, {}, ListItem$0methodref$trySelect$Type);
_.handleEvent = function handleEvent_11(arg0){
  $trySelect(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_lists_ListItem$0methodref$trySelect$Type_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListItem/0methodref$trySelect$Type', 359);
function $handleEvent(this$static, arg0){
  $trySelect(this$static.$$outer_0, arg0);
}

function ListItem$1methodref$trySelect$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(360, 1, {}, ListItem$1methodref$trySelect$Type);
_.handleEvent = function handleEvent_12(arg0){
  $handleEvent(this, arg0);
}
;
var Lorg_dominokit_domino_ui_lists_ListItem$1methodref$trySelect$Type_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListItem/1methodref$trySelect$Type', 360);
function ListItem$lambda$2$Type(){
}

defineClass(361, 1, $intern_22, ListItem$lambda$2$Type);
_.accept = function accept_19(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_lists_ListItem$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.lists', 'ListItem/lambda$2$Type', 361);
defineClass(366, 22, {});
var Lorg_dominokit_domino_ui_loaders_BaseLoader_2_classLit = createForClass('org.dominokit.domino.ui.loaders', 'BaseLoader', 366);
function $setLoadingText(this$static, text_0){
  this$static.loadingText.textContent = text_0;
}

function BounceLoader(){
  $clinit_Optional();
  this.loadingText = castToNative($textContent($style($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['waitMe_text'])), 'color:#555'), 'Loading...').element, $wnd.HTMLDivElement);
  this.progress1 = castToNative($style($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['waitMe_progress_elem1'])), 'background-color:#555;').element, $wnd.HTMLDivElement);
  this.progress2 = castToNative($style($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['waitMe_progress_elem2'])), 'background-color:#555;').element, $wnd.HTMLDivElement);
  this.progress3 = castToNative($style($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['waitMe_progress_elem3'])), 'background-color:#555;').element, $wnd.HTMLDivElement);
  this.loader = castToNative($add_7($add_7($add_7($css_0($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['waitMe_progress'])), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['bounce'])), this.progress1), this.progress2), this.progress3).element, $wnd.HTMLDivElement);
  this.content_0 = castToNative($add_7($add_7($css_0($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['waitMe_content'])), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['v-center'])), this.loader), this.loadingText).element, $wnd.HTMLDivElement);
  this.element = castToNative($add_7($style($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['waitMe'])), 'background: rgba(255, 255, 255, 0.9);'), this.content_0).element, $wnd.HTMLDivElement);
  $init(this, this);
}

defineClass(367, 366, {}, BounceLoader);
_.element_2 = function element_20(){
  return this.element;
}
;
var Lorg_dominokit_domino_ui_loaders_BounceLoader_2_classLit = createForClass('org.dominokit.domino.ui.loaders', 'BounceLoader', 367);
function $setLoadingText_0(this$static, text_0){
  $setLoadingText(this$static.loaderElement, text_0);
  return this$static;
}

function $start(this$static){
  $stop_0(this$static);
  $appendChild(this$static.target_0, this$static.loaderElement.element);
  $add_4(this$static.target_0.style_0, 'waitMe_container');
  this$static.started = true;
  return this$static;
}

function $stop_0(this$static){
  if (this$static.started) {
    this$static.loaderElement.element.remove();
    $remove_9(this$static.target_0.style_0, 'waitMe_container');
    this$static.started = false;
  }
  return this$static;
}

function Loader(target){
  this.loadingTextPosition = ($clinit_Loader$LoadingTextPosition() , MIDDLE);
  this.target_0 = new DominoElement(target);
  this.loaderElement = new BounceLoader;
  $css(new DominoElement(this.loaderElement.content_0), this.loadingTextPosition.style_0);
}

defineClass(152, 1, {}, Loader);
_.started = false;
var Lorg_dominokit_domino_ui_loaders_Loader_2_classLit = createForClass('org.dominokit.domino.ui.loaders', 'Loader', 152);
function $clinit_Loader$LoadingTextPosition(){
  $clinit_Loader$LoadingTextPosition = emptyMethod;
  TOP = new Loader$LoadingTextPosition('TOP', 0, 'loading-top');
  MIDDLE = new Loader$LoadingTextPosition('MIDDLE', 1, 'loading-middle');
  BOTTOM = new Loader$LoadingTextPosition('BOTTOM', 2, 'loading-bottom');
}

function Loader$LoadingTextPosition(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_9(){
  $clinit_Loader$LoadingTextPosition();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_loaders_Loader$LoadingTextPosition_2_classLit, 1), $intern_1, 90, 0, [TOP, MIDDLE, BOTTOM]);
}

defineClass(90, 13, {3:1, 20:1, 13:1, 90:1}, Loader$LoadingTextPosition);
var BOTTOM, MIDDLE, TOP;
var Lorg_dominokit_domino_ui_loaders_Loader$LoadingTextPosition_2_classLit = createForEnum('org.dominokit.domino.ui.loaders', 'Loader/LoadingTextPosition', 90, values_9);
function $clinit_MediaQuery(){
  $clinit_MediaQuery = emptyMethod;
  ($clinit_DomGlobal() , $wnd.goog.global.window).matchMedia('(min-width: 1800px)');
  $wnd.goog.global.window.matchMedia('(min-width: 1200px) and (max-width: 1800px)');
  $wnd.goog.global.window.matchMedia('(min-width: 992px) and (max-width: 1200px)');
  $wnd.goog.global.window.matchMedia('(min-width: 768px) and (max-width: 992px)');
  $wnd.goog.global.window.matchMedia('(max-width: 768px)');
  $wnd.goog.global.window.matchMedia('(min-width: 1800px)');
  $wnd.goog.global.window.matchMedia('(min-width: 1200px)');
  mediumAndUpMediaQueryList = $wnd.goog.global.window.matchMedia('(min-width: 992px)');
  $wnd.goog.global.window.matchMedia('(min-width: 768px)');
  $wnd.goog.global.window.matchMedia('(min-width: 0x)');
  $wnd.goog.global.window.matchMedia('(max-width: 1800px)');
  $wnd.goog.global.window.matchMedia('(max-width: 1800px)');
  $wnd.goog.global.window.matchMedia('(max-width: 1200px)');
  smallAndDownMediaQueryList = $wnd.goog.global.window.matchMedia('(max-width: 992px)');
  $wnd.goog.global.window.matchMedia('(max-width: 768px)');
  LISTENERS = new HashMap;
  new HashMap;
}

function addListener(listener, mediaQueryList){
  $clinit_MediaQuery();
  var mediaQueryListListener;
  mediaQueryListListener = makeLambdaFunction(MediaQuery$lambda$0$Type.prototype.onInvoke_1, MediaQuery$lambda$0$Type, [listener]);
  mediaQueryList.addListener(mediaQueryListListener);
  $put(LISTENERS, listener, mediaQueryListListener);
  lambda$0_0(mediaQueryListListener.listener_0, mediaQueryList);
}

function lambda$0_0(listener_0, p0_1){
  $clinit_MediaQuery();
  p0_1.matches && listener_0.onMatch();
}

var LISTENERS, mediumAndUpMediaQueryList, smallAndDownMediaQueryList;
function MediaQuery$lambda$0$Type(listener_0){
  this.listener_0 = listener_0;
}

defineClass(407, $wnd.Function, {}, MediaQuery$lambda$0$Type);
_.onInvoke_1 = function onInvoke(arg0){
  lambda$0_0(this.listener_0, arg0);
}
;
function $lambda$0_2(this$static, element_1, e_1){
  var htmlElement, newPosition, position;
  htmlElement = castToNative(e_1, $wnd.HTMLElement);
  position = __parseAndValidateInt(htmlElement.getAttribute('data-position'));
  if (maskUndefined(htmlElement) !== maskUndefined(element_1)) {
    newPosition = position + (element_1.offsetHeight + element_1.offsetTop);
    htmlElement.setAttribute('data-position', newPosition);
    htmlElement.style.setProperty(this$static.positionProperty, newPosition + 'px');
  }
}

function $lambda$1_0(this$static, dataPosition_1, height_2, e_2){
  var htmlElement, newPosition, position;
  htmlElement = castToNative(e_2, $wnd.HTMLElement);
  position = __parseAndValidateInt(htmlElement.getAttribute('data-position'));
  if (position > dataPosition_1) {
    newPosition = position - height_2 - 20;
    e_2.setAttribute('data-position', newPosition);
    htmlElement.style.setProperty(this$static.positionProperty, newPosition + 'px');
  }
}

function $onBeforeAttach(this$static, element){
  element.setAttribute('data-position', '20');
  element.setAttribute('data-notify-position', this$static.selector);
  element.style.setProperty('top', '20px');
  element.style.setProperty('right', '20px');
}

function $onNewElement(this$static, element){
  var elements;
  elements = $asList(($clinit_DomGlobal() , document_0).querySelectorAll('div[data-notify-position=' + this$static.selector + ']'));
  $forEach_1(elements, new NotificationPosition$lambda$0$Type(this$static, element));
}

function $onRemoveElement(this$static, dataPosition, height){
  var elements;
  elements = $asList(($clinit_DomGlobal() , document_0).querySelectorAll('div[data-notify-position=' + this$static.selector + ']'));
  $forEach_1(elements, new NotificationPosition$lambda$1$Type(this$static, dataPosition, height));
}

function NotificationPosition(selector, positionProperty){
  this.selector = selector;
  this.positionProperty = positionProperty;
}

defineClass(73, 1, {});
var Lorg_dominokit_domino_ui_notifications_NotificationPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'NotificationPosition', 73);
function BottomCenterPosition(){
  NotificationPosition.call(this, 'bottom-center', 'bottom');
}

defineClass(351, 73, {}, BottomCenterPosition);
var Lorg_dominokit_domino_ui_notifications_BottomCenterPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'BottomCenterPosition', 351);
function BottomLeftPosition(){
  NotificationPosition.call(this, 'bottom-left', 'bottom');
}

defineClass(350, 73, {}, BottomLeftPosition);
var Lorg_dominokit_domino_ui_notifications_BottomLeftPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'BottomLeftPosition', 350);
function BottomRightPosition(){
  NotificationPosition.call(this, 'bottom-right', 'bottom');
}

defineClass(352, 73, {}, BottomRightPosition);
var Lorg_dominokit_domino_ui_notifications_BottomRightPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'BottomRightPosition', 352);
function $clinit_Notification(){
  $clinit_Notification = emptyMethod;
  new TopLeftPosition;
  new TopCenterPosition;
  TOP_RIGHT = new TopRightPosition;
  new BottomLeftPosition;
  new BottomCenterPosition;
  new BottomRightPosition;
}

function $animateClose(this$static, after, onComplete){
  $animate($callback($transition($delay(new Animation_0(this$static.element), after), this$static.outTransition), new Notification$lambda$4$Type(this$static, onComplete)));
}

function $close_0(this$static, after){
  var dataPosition, height;
  if (!this$static.closed_0) {
    dataPosition = __parseAndValidateInt(this$static.element.getAttribute('data-position'));
    height = this$static.element.offsetHeight;
    $animateClose(this$static, after, new Notification$lambda$2$Type(this$static, dataPosition, height));
  }
}

function $lambda$1_1(this$static){
  $close_0(this$static, this$static.duration);
}

function $lambda$2_0(this$static, dataPosition_1, height_2){
  $onRemoveElement(this$static.position, dataPosition_1, height_2);
  $forEach_0(this$static.closeHandlers, new Notification$0methodref$onClose$Type);
  this$static.closed_0 = true;
}

function $lambda$4_1(this$static, onComplete_1){
  this$static.element.remove();
  $lambda$2_0(onComplete_1.$$outer_0, onComplete_1.dataPosition_1, onComplete_1.height_2);
}

function $show_2(this$static){
  this$static.closed_0 = false;
  $onBeforeAttach(this$static.position, this$static.element);
  ($clinit_DomGlobal() , document_0).body.appendChild(this$static.element);
  $onNewElement(this$static.position, this$static.element);
  $animate($callback($transition(new Animation_0(this$static.element), this$static.inTransition), new Notification$lambda$1$Type(this$static)));
  return this$static;
}

function Notification_0(){
  $clinit_Optional();
  this.closeButton = castToNative($textContent($style($css_0($attr($attr(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('button'), $wnd.HTMLElement)), 'type', 'button'), 'aria-hidden', 'true'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['close'])), 'position: absolute; right: 10px; top: 5px; z-index: 1033;'), '\xD7').element, $wnd.HTMLButtonElement);
  this.messageSpan = (new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement))).element;
  this.element = castToNative($add_7($add_7($style($attr($attr($css_0($css_0($css_0($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['bootstrap-notify-container'])), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['alert'])), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['alert-dismissible'])), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['p-r-35'])), 'role', 'alert'), 'data-position', '20'), 'display: inline-block; position: fixed; transition: all 800ms ease-in-out; z-index: 99999999;'), this.closeButton), this.messageSpan).element, $wnd.HTMLDivElement);
  this.inTransition = ($clinit_Transition() , FADE_IN);
  this.outTransition = FADE_OUT;
  this.position = TOP_RIGHT;
  $clinit_Color();
  this.closeHandlers = new ArrayList;
  $init(this, this);
  $elevate(this, ($clinit_Elevation() , LEVEL_1));
  $add_4(this.style_0, 'bg-black');
  this.closeButton.addEventListener(($clinit_EventType() , click_0).name_0, new Notification$lambda$0$Type(this));
}

function create_3(message, type_0){
  var notification_0;
  $clinit_Notification();
  var notification;
  notification = (notification_0 = new Notification_0 , notification_0.messageSpan.textContent = message , notification_0);
  $add_4(notification.style_0, type_0);
  $remove_9(notification.style_0, 'bg-black');
  return notification;
}

defineClass(328, 22, {}, Notification_0);
_.element_2 = function element_21(){
  return this.element;
}
;
_.closed_0 = true;
_.duration = 4000;
var TOP_RIGHT;
var Lorg_dominokit_domino_ui_notifications_Notification_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification', 328);
function Notification$0methodref$onClose$Type(){
}

defineClass(331, 1, $intern_22, Notification$0methodref$onClose$Type);
_.accept = function accept_20(arg0){
  throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_notifications_Notification$0methodref$onClose$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/0methodref$onClose$Type', 331);
function Notification$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(329, 1, {}, Notification$lambda$0$Type);
_.handleEvent = function handleEvent_13(arg0){
  $close_0(this.$$outer_0, 0);
}
;
var Lorg_dominokit_domino_ui_notifications_Notification$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/lambda$0$Type', 329);
function Notification$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(330, 1, {}, Notification$lambda$1$Type);
_.onComplete = function onComplete_2(arg0){
  $lambda$1_1(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_notifications_Notification$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/lambda$1$Type', 330);
function Notification$lambda$2$Type($$outer_0, dataPosition_1, height_2){
  this.$$outer_0 = $$outer_0;
  this.dataPosition_1 = dataPosition_1;
  this.height_2 = height_2;
}

defineClass(332, 1, {135:1}, Notification$lambda$2$Type);
_.run = function run_0(){
  $lambda$2_0(this.$$outer_0, this.dataPosition_1, this.height_2);
}
;
_.dataPosition_1 = 0;
_.height_2 = 0;
var Lorg_dominokit_domino_ui_notifications_Notification$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/lambda$2$Type', 332);
function Notification$lambda$4$Type($$outer_0, onComplete_1){
  this.$$outer_0 = $$outer_0;
  this.onComplete_1 = onComplete_1;
}

defineClass(333, 1, {}, Notification$lambda$4$Type);
_.onComplete = function onComplete_3(arg0){
  $lambda$4_1(this.$$outer_0, this.onComplete_1);
}
;
var Lorg_dominokit_domino_ui_notifications_Notification$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/lambda$4$Type', 333);
function NotificationPosition$lambda$0$Type($$outer_0, element_1){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
}

defineClass(346, 1, $intern_22, NotificationPosition$lambda$0$Type);
_.accept = function accept_21(arg0){
  $lambda$0_2(this.$$outer_0, this.element_1, castToNative(arg0, $wnd.Element));
}
;
var Lorg_dominokit_domino_ui_notifications_NotificationPosition$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'NotificationPosition/lambda$0$Type', 346);
function NotificationPosition$lambda$1$Type($$outer_0, dataPosition_1, height_2){
  this.$$outer_0 = $$outer_0;
  this.dataPosition_1 = dataPosition_1;
  this.height_2 = height_2;
}

defineClass(347, 1, $intern_22, NotificationPosition$lambda$1$Type);
_.accept = function accept_22(arg0){
  $lambda$1_0(this.$$outer_0, this.dataPosition_1, this.height_2, castToNative(arg0, $wnd.Element));
}
;
_.dataPosition_1 = 0;
_.height_2 = 0;
var Lorg_dominokit_domino_ui_notifications_NotificationPosition$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'NotificationPosition/lambda$1$Type', 347);
function TopCenterPosition(){
  NotificationPosition.call(this, 'top-center', 'top');
}

defineClass(348, 73, {}, TopCenterPosition);
var Lorg_dominokit_domino_ui_notifications_TopCenterPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'TopCenterPosition', 348);
function TopLeftPosition(){
  NotificationPosition.call(this, 'top-left', 'top');
}

defineClass(345, 73, {}, TopLeftPosition);
var Lorg_dominokit_domino_ui_notifications_TopLeftPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'TopLeftPosition', 345);
function TopRightPosition(){
  NotificationPosition.call(this, 'top-right', 'top');
}

defineClass(349, 73, {}, TopRightPosition);
var Lorg_dominokit_domino_ui_notifications_TopRightPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'TopRightPosition', 349);
function $clinit_PopupPosition(){
  $clinit_PopupPosition = emptyMethod;
  TOP_0 = new PopupPositionTop;
}

var TOP_0;
function $position(tooltip, target){
  var targetRect, tooltipRect;
  targetRect = target.getBoundingClientRect();
  tooltipRect = tooltip.getBoundingClientRect();
  tooltip.style.setProperty('top', targetRect.top + ($clinit_DomGlobal() , $wnd.goog.global.window).pageYOffset - tooltipRect.height + 'px');
  tooltip.style.setProperty('left', targetRect.left + $wnd.goog.global.window.pageXOffset + (targetRect.width - tooltipRect.width) / 2 + 'px');
}

function PopupPositionTop(){
}

defineClass(344, 1, {}, PopupPositionTop);
var Lorg_dominokit_domino_ui_popover_PopupPositionTop_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'PopupPositionTop', 344);
function $lambda$0_3(this$static, targetElement_1, evt_1){
  evt_1.stopPropagation();
  ($clinit_DomGlobal() , document_0).body.appendChild(this$static.element.wrappedElement);
  $remove_10(this$static.element.style_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['fade', 'in']));
  $add_5(this$static.element.style_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['fade', 'in']));
  $position(this$static.element.wrappedElement, targetElement_1);
  $position_0(this$static, this$static.popupPosition);
  $ifPresent(this$static.elementObserver, new Tooltip$0methodref$remove$Type);
  this$static.elementObserver = onDetach(targetElement_1, new Tooltip$lambda$2$Type(this$static));
}

function $lambda$4_2(this$static, targetElement_1){
  targetElement_1.removeEventListener(($clinit_EventType() , mouseenter).name_0, this$static.showToolTipListener);
  targetElement_1.removeEventListener(mouseleave.name_0, this$static.removeToolTipListener);
  $ifPresent(this$static.elementObserver, new Tooltip$1methodref$remove$Type);
}

function $position_0(this$static, position){
  $remove_9(this$static.element.style_0, 'top');
  this$static.popupPosition = position;
  $add_4(this$static.element.style_0, 'top');
  return this$static;
}

function $setContent(this$static, content_0){
  $clearElement(this$static.innerElement);
  $appendChild(this$static.innerElement, content_0);
  return this$static;
}

function Tooltip(targetElement, content_0){
  $clinit_Optional();
  this.element = new DominoElement($attr($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['tooltip'])), 'role', 'tooltip').element);
  this.arrowElement = new DominoElement($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['tooltip-arrow'])).element);
  this.innerElement = new DominoElement($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['tooltip-inner'])).element);
  this.popupPosition = ($clinit_PopupPosition() , TOP_0);
  this.elementObserver = (null , EMPTY);
  $appendChild_0(this.element, this.arrowElement);
  $appendChild_0(this.element, this.innerElement);
  $appendChild(this.innerElement, content_0);
  $add_4(this.element.style_0, 'top');
  this.showToolTipListener = new Tooltip$lambda$0$Type(this, targetElement);
  this.removeToolTipListener = new Tooltip$lambda$3$Type(this);
  targetElement.addEventListener(($clinit_EventType() , mouseenter).name_0, this.showToolTipListener);
  targetElement.addEventListener(mouseleave.name_0, this.removeToolTipListener);
  $init(this, this);
  new Tooltip$lambda$4$Type(this, targetElement);
}

defineClass(118, 22, {118:1}, Tooltip);
_.element_2 = function element_22(){
  return castToNative(this.element.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lorg_dominokit_domino_ui_popover_Tooltip_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Tooltip', 118);
function Tooltip$0methodref$remove$Type(){
}

defineClass(353, 1, $intern_22, Tooltip$0methodref$remove$Type);
_.accept = function accept_23(arg0){
  $remove_11(castTo(arg0, 93));
}
;
var Lorg_dominokit_domino_ui_popover_Tooltip$0methodref$remove$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Tooltip/0methodref$remove$Type', 353);
function Tooltip$1methodref$remove$Type(){
}

defineClass(357, 1, $intern_22, Tooltip$1methodref$remove$Type);
_.accept = function accept_24(arg0){
  $remove_11(castTo(arg0, 93));
}
;
var Lorg_dominokit_domino_ui_popover_Tooltip$1methodref$remove$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Tooltip/1methodref$remove$Type', 357);
function Tooltip$lambda$0$Type($$outer_0, targetElement_1){
  this.$$outer_0 = $$outer_0;
  this.targetElement_1 = targetElement_1;
}

defineClass(355, 1, {}, Tooltip$lambda$0$Type);
_.handleEvent = function handleEvent_14(arg0){
  $lambda$0_3(this.$$outer_0, this.targetElement_1, arg0);
}
;
var Lorg_dominokit_domino_ui_popover_Tooltip$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Tooltip/lambda$0$Type', 355);
function Tooltip$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(354, 1, {}, Tooltip$lambda$2$Type);
_.onObserved = function onObserved_2(arg0){
  $remove_8(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_popover_Tooltip$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Tooltip/lambda$2$Type', 354);
function Tooltip$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(356, 1, {}, Tooltip$lambda$3$Type);
_.handleEvent = function handleEvent_15(arg0){
  $remove_8(this.$$outer_0.element);
}
;
var Lorg_dominokit_domino_ui_popover_Tooltip$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Tooltip/lambda$3$Type', 356);
function Tooltip$lambda$4$Type($$outer_0, targetElement_1){
  this.$$outer_0 = $$outer_0;
  this.targetElement_1 = targetElement_1;
}

defineClass(358, 1, $intern_22, Tooltip$lambda$4$Type);
_.accept = function accept_25(arg0){
  var lastArg;
  $lambda$4_2(this.$$outer_0, (lastArg = this.targetElement_1 , castTo(arg0, 118) , lastArg));
}
;
var Lorg_dominokit_domino_ui_popover_Tooltip$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Tooltip/lambda$4$Type', 358);
function $clinit_Color(){
  $clinit_Color = emptyMethod;
  RED = new Color$1;
  INDIGO = new Color$41;
  BLUE = new Color$51;
}

var BLUE, INDIGO, RED;
function Color$1(){
}

defineClass(240, 1, {}, Color$1);
_.getName = function getName_0(){
  return 'RED';
}
;
_.getStyle = function getStyle(){
  return 'col-red';
}
;
var Lorg_dominokit_domino_ui_style_Color$1_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Color/1', 240);
function Color$41(){
}

defineClass(241, 1, {}, Color$41);
_.getName = function getName_1(){
  return 'INDIGO';
}
;
_.getStyle = function getStyle_0(){
  return 'col-indigo';
}
;
var Lorg_dominokit_domino_ui_style_Color$41_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Color/41', 241);
function Color$51(){
}

defineClass(242, 1, {}, Color$51);
_.getName = function getName_2(){
  return 'BLUE';
}
;
_.getStyle = function getStyle_1(){
  return 'col-blue';
}
;
var Lorg_dominokit_domino_ui_style_Color$51_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Color/51', 242);
function $clinit_ColorScheme(){
  $clinit_ColorScheme = emptyMethod;
  RED_0 = new ColorScheme$1;
  $clinit_ColorScheme$2();
  $clinit_ColorScheme$3();
  $clinit_ColorScheme$4();
  INDIGO_0 = new ColorScheme$5;
  $clinit_ColorScheme$6();
  $clinit_ColorScheme$7();
  $clinit_ColorScheme$8();
  $clinit_ColorScheme$9();
  $clinit_ColorScheme$10();
  $clinit_ColorScheme$11();
  $clinit_ColorScheme$12();
  $clinit_ColorScheme$13();
  $clinit_ColorScheme$14();
  $clinit_ColorScheme$15();
  $clinit_ColorScheme$16();
  $clinit_ColorScheme$17();
  $clinit_ColorScheme$18();
  $clinit_ColorScheme$19();
  $clinit_ColorScheme$20();
  $clinit_ColorScheme$21();
  $clinit_ColorScheme$22();
}

var INDIGO_0, RED_0;
function $clinit_ColorScheme$1(){
  $clinit_ColorScheme$1 = emptyMethod;
  $clinit_ColorScheme();
}

function ColorScheme$1(){
  $clinit_ColorScheme$1();
}

defineClass(217, 1, {}, ColorScheme$1);
_.color_1 = function color_1(){
  return $clinit_Color() , RED;
}
;
var Lorg_dominokit_domino_ui_style_ColorScheme$1_2_classLit = createForClass('org.dominokit.domino.ui.style', 'ColorScheme/1', 217);
function $clinit_ColorScheme$10(){
  $clinit_ColorScheme$10 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$11(){
  $clinit_ColorScheme$11 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$12(){
  $clinit_ColorScheme$12 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$13(){
  $clinit_ColorScheme$13 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$14(){
  $clinit_ColorScheme$14 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$15(){
  $clinit_ColorScheme$15 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$16(){
  $clinit_ColorScheme$16 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$17(){
  $clinit_ColorScheme$17 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$18(){
  $clinit_ColorScheme$18 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$19(){
  $clinit_ColorScheme$19 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$2(){
  $clinit_ColorScheme$2 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$20(){
  $clinit_ColorScheme$20 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$21(){
  $clinit_ColorScheme$21 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$22(){
  $clinit_ColorScheme$22 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$3(){
  $clinit_ColorScheme$3 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$4(){
  $clinit_ColorScheme$4 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$5(){
  $clinit_ColorScheme$5 = emptyMethod;
  $clinit_ColorScheme();
}

function ColorScheme$5(){
  $clinit_ColorScheme$5();
}

defineClass(218, 1, {}, ColorScheme$5);
_.color_1 = function color_2(){
  return $clinit_Color() , INDIGO;
}
;
var Lorg_dominokit_domino_ui_style_ColorScheme$5_2_classLit = createForClass('org.dominokit.domino.ui.style', 'ColorScheme/5', 218);
function $clinit_ColorScheme$6(){
  $clinit_ColorScheme$6 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$7(){
  $clinit_ColorScheme$7 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$8(){
  $clinit_ColorScheme$8 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$9(){
  $clinit_ColorScheme$9 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_Elevation(){
  $clinit_Elevation = emptyMethod;
  NONE = new Elevation('NONE', 0, 'elevation-none');
  LEVEL_0 = new Elevation('LEVEL_0', 1, 'elevation-0');
  LEVEL_1 = new Elevation('LEVEL_1', 2, 'elevation-1');
  LEVEL_2 = new Elevation('LEVEL_2', 3, 'elevation-2');
  LEVEL_3 = new Elevation('LEVEL_3', 4, 'elevation-3');
  LEVEL_4 = new Elevation('LEVEL_4', 5, 'elevation-4');
  LEVEL_5 = new Elevation('LEVEL_5', 6, 'elevation-5');
  LEVEL_6 = new Elevation('LEVEL_6', 7, 'elevation-6');
  LEVEL_7 = new Elevation('LEVEL_7', 8, 'elevation-7');
  LEVEL_8 = new Elevation('LEVEL_8', 9, 'elevation-8');
  LEVEL_9 = new Elevation('LEVEL_9', 10, 'elevation-9');
  LEVEL_10 = new Elevation('LEVEL_10', 11, 'elevation-10');
  LEVEL_11 = new Elevation('LEVEL_11', 12, 'elevation-11');
  LEVEL_12 = new Elevation('LEVEL_12', 13, 'elevation-12');
  LEVEL_13 = new Elevation('LEVEL_13', 14, 'elevation-13');
  LEVEL_14 = new Elevation('LEVEL_14', 15, 'elevation-14');
  LEVEL_15 = new Elevation('LEVEL_15', 16, 'elevation-15');
  LEVEL_16 = new Elevation('LEVEL_16', 17, 'elevation-16');
  LEVEL_17 = new Elevation('LEVEL_17', 18, 'elevation-17');
  LEVEL_18 = new Elevation('LEVEL_18', 19, 'elevation-18');
  LEVEL_19 = new Elevation('LEVEL_19', 20, 'elevation-19');
  LEVEL_20 = new Elevation('LEVEL_20', 21, 'elevation-20');
  LEVEL_21 = new Elevation('LEVEL_21', 22, 'elevation-21');
  LEVEL_22 = new Elevation('LEVEL_22', 23, 'elevation-22');
  LEVEL_23 = new Elevation('LEVEL_23', 24, 'elevation-23');
  LEVEL_24 = new Elevation('LEVEL_24', 25, 'elevation-24');
}

function Elevation(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function removeFrom_0(element){
  $clinit_Elevation();
  var elevationClass, i;
  elevationClass = '';
  for (i = 0; i < element.classList.length; i++) {
    $equals_0(element.classList.item(i).substr(0, 'elevation-'.length), 'elevation-') && (elevationClass = element.classList.item(i));
  }
  elevationClass != null && elevationClass.length != 0 && element.classList.remove(elevationClass);
}

function values_10(){
  $clinit_Elevation();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_Elevation_2_classLit, 1), $intern_1, 18, 0, [NONE, LEVEL_0, LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4, LEVEL_5, LEVEL_6, LEVEL_7, LEVEL_8, LEVEL_9, LEVEL_10, LEVEL_11, LEVEL_12, LEVEL_13, LEVEL_14, LEVEL_15, LEVEL_16, LEVEL_17, LEVEL_18, LEVEL_19, LEVEL_20, LEVEL_21, LEVEL_22, LEVEL_23, LEVEL_24]);
}

defineClass(18, 13, {3:1, 20:1, 13:1, 18:1}, Elevation);
var LEVEL_0, LEVEL_1, LEVEL_10, LEVEL_11, LEVEL_12, LEVEL_13, LEVEL_14, LEVEL_15, LEVEL_16, LEVEL_17, LEVEL_18, LEVEL_19, LEVEL_2, LEVEL_20, LEVEL_21, LEVEL_22, LEVEL_23, LEVEL_24, LEVEL_3, LEVEL_4, LEVEL_5, LEVEL_6, LEVEL_7, LEVEL_8, LEVEL_9, NONE;
var Lorg_dominokit_domino_ui_style_Elevation_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'Elevation', 18, values_10);
function $add_4(this$static, cssClass){
  cssClass != null && cssClass.length != 0 && this$static.element.classList.add(cssClass);
  return this$static;
}

function $add_5(this$static, cssClasses){
  var cssClass, cssClass$array, cssClass$index, cssClass$max;
  if (cssClasses.length > 0) {
    for (cssClass$array = cssClasses , cssClass$index = 0 , cssClass$max = cssClass$array.length; cssClass$index < cssClass$max; ++cssClass$index) {
      cssClass = cssClass$array[cssClass$index];
      cssClass != null && cssClass.length != 0 && this$static.element.classList.add(cssClass);
    }
  }
  return this$static;
}

function $contains_3(this$static, cssClass){
  if (cssClass != null && cssClass.length != 0) {
    return this$static.element.classList.contains(cssClass);
  }
  return false;
}

function $item(this$static, index_0){
  return this$static.element.classList.item(index_0);
}

function $remove_9(this$static, cssClass){
  cssClass != null && cssClass.length != 0 && this$static.element.classList.remove(cssClass);
  return this$static;
}

function $remove_10(this$static, cssClasses){
  var cssClass, cssClass$array, cssClass$index, cssClass$max;
  if (cssClasses.length > 0) {
    for (cssClass$array = cssClasses , cssClass$index = 0 , cssClass$max = cssClass$array.length; cssClass$index < cssClass$max; ++cssClass$index) {
      cssClass = cssClass$array[cssClass$index];
      cssClass != null && cssClass.length != 0 && this$static.element.classList.remove(cssClass);
    }
  }
  return this$static;
}

function $removeProperty(this$static, name_0){
  this$static.element.style.removeProperty(name_0);
  return this$static;
}

function $setBackgroundColor(this$static){
  this$static.element.style.setProperty('background-color', 'red');
  return this$static;
}

function $setDisplay(this$static, display){
  this$static.element.style.setProperty('display', display);
  return this$static;
}

function $setLineHeight(this$static){
  this$static.element.style.setProperty('line-height', '62px');
  return this$static;
}

function $setMinHeight(this$static, height){
  this$static.element.style.setProperty('min-height', height);
  return this$static;
}

function $setPaddingBottom(this$static, padding){
  this$static.element.style.setProperty('padding-bottom', padding);
  return this$static;
}

function $setPaddingLeft(this$static, padding){
  this$static.element.style.setProperty('padding-left', padding);
  return this$static;
}

function $setProperty(this$static, name_0, value_0){
  this$static.element.style.setProperty(name_0, value_0);
  return this$static;
}

function $setTransitionDuration(this$static, transactionDuration){
  return this$static.element.style.setProperty('transaction-duration', transactionDuration) , this$static;
}

function Style(element){
  this.element = element.element_2();
  this.wrapperElement = element;
}

defineClass(32, 1, {}, Style);
_.element_2 = function element_23(){
  return this.element;
}
;
var Lorg_dominokit_domino_ui_style_Style_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Style', 32);
function Style$lambda$0$Type(htmlElement_0){
  this.htmlElement_0 = htmlElement_0;
}

defineClass(40, 1, {}, Style$lambda$0$Type);
_.element_2 = function element_24(){
  return this.htmlElement_0;
}
;
var Lorg_dominokit_domino_ui_style_Style$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Style/lambda$0$Type', 40);
function $clinit_StyleType(){
  $clinit_StyleType = emptyMethod;
  DEFAULT_0 = new StyleType('DEFAULT', 0, 'default');
  PRIMARY = new StyleType('PRIMARY', 1, 'primary');
  SUCCESS = new StyleType('SUCCESS', 2, 'success');
  INFO = new StyleType('INFO', 3, 'info');
  WARNING = new StyleType('WARNING', 4, 'warning');
  DANGER = new StyleType('DANGER', 5, 'danger');
}

function StyleType(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_11(){
  $clinit_StyleType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_StyleType_2_classLit, 1), $intern_1, 49, 0, [DEFAULT_0, PRIMARY, SUCCESS, INFO, WARNING, DANGER]);
}

defineClass(49, 13, {3:1, 20:1, 13:1, 49:1}, StyleType);
var DANGER, DEFAULT_0, INFO, PRIMARY, SUCCESS, WARNING;
var Lorg_dominokit_domino_ui_style_StyleType_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'StyleType', 49, values_11);
function $clinit_Unit(){
  $clinit_Unit = emptyMethod;
  px = new Unit('px', 0, new Unit$lambda$0$Type);
  q = new Unit('q', 1, new Unit$lambda$2$Type);
  mm = new Unit('mm', 2, new Unit$lambda$3$Type);
  cm = new Unit('cm', 3, new Unit$lambda$4$Type);
  in_1 = new Unit('in', 4, new Unit$lambda$5$Type);
  pt = new Unit('pt', 5, new Unit$lambda$6$Type);
  pc = new Unit('pc', 6, new Unit$lambda$7$Type);
  em = new Unit('em', 7, new Unit$lambda$8$Type);
  rem_0 = new Unit('rem', 8, new Unit$lambda$9$Type);
  ex_0 = new Unit('ex', 9, new Unit$lambda$10$Type);
  ch_0 = new Unit('ch', 10, new Unit$lambda$11$Type);
  vw = new Unit('vw', 11, new Unit$lambda$12$Type);
  vh = new Unit('vh', 12, new Unit$lambda$1$Type);
  percent = new Unit('percent', 13, new Unit$lambda$13$Type);
  none = new Unit('none', 14, new Unit$lambda$14$Type);
}

function $of(this$static, value_0){
  return this$static.unitFormatter.format(value_0);
}

function Unit(enum$name, enum$ordinal, unitFormatter){
  Enum.call(this, enum$name, enum$ordinal);
  this.unitFormatter = unitFormatter;
}

function values_12(){
  $clinit_Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_Unit_2_classLit, 1), $intern_1, 27, 0, [px, q, mm, cm, in_1, pt, pc, em, rem_0, ex_0, ch_0, vw, vh, percent, none]);
}

defineClass(27, 13, {3:1, 20:1, 13:1, 27:1}, Unit);
var ch_0, cm, em, ex_0, in_1, mm, none, pc, percent, pt, px, q, rem_0, vh, vw;
var Lorg_dominokit_domino_ui_style_Unit_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'Unit', 27, values_12);
function Unit$lambda$0$Type(){
}

defineClass(221, 1, {}, Unit$lambda$0$Type);
_.format = function format(value_0){
  return $clinit_Unit() , value_0 + 'px';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$0$Type', 221);
function Unit$lambda$1$Type(){
}

defineClass(233, 1, {}, Unit$lambda$1$Type);
_.format = function format_0(value_0){
  return $clinit_Unit() , value_0 + 'vh';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$1$Type', 233);
function Unit$lambda$10$Type(){
}

defineClass(230, 1, {}, Unit$lambda$10$Type);
_.format = function format_1(value_0){
  return $clinit_Unit() , value_0 + 'ex';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$10$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$10$Type', 230);
function Unit$lambda$11$Type(){
}

defineClass(231, 1, {}, Unit$lambda$11$Type);
_.format = function format_2(value_0){
  return $clinit_Unit() , value_0 + 'ch';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$11$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$11$Type', 231);
function Unit$lambda$12$Type(){
}

defineClass(232, 1, {}, Unit$lambda$12$Type);
_.format = function format_3(value_0){
  return $clinit_Unit() , value_0 + 'vw';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$12$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$12$Type', 232);
function Unit$lambda$13$Type(){
}

defineClass(234, 1, {}, Unit$lambda$13$Type);
_.format = function format_4(value_0){
  return $clinit_Unit() , value_0 + '%';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$13$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$13$Type', 234);
function Unit$lambda$14$Type(){
}

defineClass(235, 1, {}, Unit$lambda$14$Type);
_.format = function format_5(value_0){
  return $clinit_Unit() , value_0 + '';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$14$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$14$Type', 235);
function Unit$lambda$2$Type(){
}

defineClass(222, 1, {}, Unit$lambda$2$Type);
_.format = function format_6(value_0){
  return $clinit_Unit() , value_0 + 'q';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$2$Type', 222);
function Unit$lambda$3$Type(){
}

defineClass(223, 1, {}, Unit$lambda$3$Type);
_.format = function format_7(value_0){
  return $clinit_Unit() , value_0 + 'mm';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$3$Type', 223);
function Unit$lambda$4$Type(){
}

defineClass(224, 1, {}, Unit$lambda$4$Type);
_.format = function format_8(value_0){
  return $clinit_Unit() , value_0 + 'cm';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$4$Type', 224);
function Unit$lambda$5$Type(){
}

defineClass(225, 1, {}, Unit$lambda$5$Type);
_.format = function format_9(value_0){
  return $clinit_Unit() , value_0 + 'in';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$5$Type', 225);
function Unit$lambda$6$Type(){
}

defineClass(226, 1, {}, Unit$lambda$6$Type);
_.format = function format_10(value_0){
  return $clinit_Unit() , value_0 + 'pt';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$6$Type', 226);
function Unit$lambda$7$Type(){
}

defineClass(227, 1, {}, Unit$lambda$7$Type);
_.format = function format_11(value_0){
  return $clinit_Unit() , value_0 + 'pc';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$7$Type', 227);
function Unit$lambda$8$Type(){
}

defineClass(228, 1, {}, Unit$lambda$8$Type);
_.format = function format_12(value_0){
  return $clinit_Unit() , value_0 + 'em';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$8$Type', 228);
function Unit$lambda$9$Type(){
}

defineClass(229, 1, {}, Unit$lambda$9$Type);
_.format = function format_13(value_0){
  return $clinit_Unit() , value_0 + 'rem';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$9$Type', 229);
function $clinit_WaveColor(){
  $clinit_WaveColor = emptyMethod;
  RED_1 = new WaveColor('RED', 0, 'waves-red');
  PINK = new WaveColor('PINK', 1, 'waves-pink');
  PURPLE = new WaveColor('PURPLE', 2, 'waves-purple');
  DEEP_PURPLE = new WaveColor('DEEP_PURPLE', 3, 'waves-deep-purple');
  INDIGO_1 = new WaveColor('INDIGO', 4, 'waves-indigo');
  BLUE_0 = new WaveColor('BLUE', 5, 'waves-blue');
  LIGHT_BLUE = new WaveColor('LIGHT_BLUE', 6, 'waves-light-blue');
  CYAN = new WaveColor('CYAN', 7, 'waves-cyan');
  TEAL = new WaveColor('TEAL', 8, 'waves-teal');
  GREEN = new WaveColor('GREEN', 9, 'waves-green');
  LIGHT_GREEN = new WaveColor('LIGHT_GREEN', 10, 'waves-light-green');
  LIME = new WaveColor('LIME', 11, 'waves-lime');
  YELLOW = new WaveColor('YELLOW', 12, 'waves-yellow');
  AMBER = new WaveColor('AMBER', 13, 'waves-amber');
  ORANGE = new WaveColor('ORANGE', 14, 'waves-orange');
  DEEP_ORANGE = new WaveColor('DEEP_ORANGE', 15, 'waves-deep-orange');
  BROWN = new WaveColor('BROWN', 16, 'waves-brown');
  GREY = new WaveColor('GREY', 17, 'waves-grey');
  BLUE_GREY = new WaveColor('BLUE_GREY', 18, 'waves-blue-grey');
  BLACK = new WaveColor('BLACK', 19, 'waves-black');
  WHITE = new WaveColor('WHITE', 20, 'waves-white');
  LIGHT = new WaveColor('LIGHT', 21, 'waves-light');
  THEME = new WaveColor('THEME', 22, 'waves-theme');
}

function WaveColor(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_13(){
  $clinit_WaveColor();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_WaveColor_2_classLit, 1), $intern_1, 19, 0, [RED_1, PINK, PURPLE, DEEP_PURPLE, INDIGO_1, BLUE_0, LIGHT_BLUE, CYAN, TEAL, GREEN, LIGHT_GREEN, LIME, YELLOW, AMBER, ORANGE, DEEP_ORANGE, BROWN, GREY, BLUE_GREY, BLACK, WHITE, LIGHT, THEME]);
}

defineClass(19, 13, {3:1, 20:1, 13:1, 19:1}, WaveColor);
var AMBER, BLACK, BLUE_0, BLUE_GREY, BROWN, CYAN, DEEP_ORANGE, DEEP_PURPLE, GREEN, GREY, INDIGO_1, LIGHT, LIGHT_BLUE, LIGHT_GREEN, LIME, ORANGE, PINK, PURPLE, RED_1, TEAL, THEME, WHITE, YELLOW;
var Lorg_dominokit_domino_ui_style_WaveColor_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'WaveColor', 19, values_13);
function $clinit_WaveStyle(){
  $clinit_WaveStyle = emptyMethod;
  FLOAT = new WaveStyle('FLOAT', 0, 'waves-float');
  CIRCLE = new WaveStyle('CIRCLE', 1, 'waves-circle');
  RIPPLE = new WaveStyle('RIPPLE', 2, 'waves-ripple');
  BLOCK = new WaveStyle('BLOCK', 3, 'waves-block');
}

function WaveStyle(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_14(){
  $clinit_WaveStyle();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_WaveStyle_2_classLit, 1), $intern_1, 70, 0, [FLOAT, CIRCLE, RIPPLE, BLOCK]);
}

defineClass(70, 13, {3:1, 20:1, 13:1, 70:1}, WaveStyle);
var BLOCK, CIRCLE, FLOAT, RIPPLE;
var Lorg_dominokit_domino_ui_style_WaveStyle_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'WaveStyle', 70, values_14);
function $convertStyle(rippleStyle){
  var style;
  style = new StringBuilder;
  $forEach_3(rippleStyle, makeLambdaFunction(Waves$lambda$0$Type.prototype.onKey, Waves$lambda$0$Type, [style, rippleStyle]));
  return style.string;
}

function $initWaves(this$static){
  if (this$static.target_0.wrappedElement.getAttribute('disabled') != null || $contains_3(this$static.target_0.style_0, 'disabled'))
    return;
  $addEventListener(this$static.target_0, ($clinit_EventType() , mousedown).name_0, this$static.wavesEventListener);
}

function $offset(target){
  var box, docElem, position;
  docElem = target.ownerDocument.documentElement;
  box = target.getBoundingClientRect();
  position = new Waves$ElementOffset;
  position.top_0 = box.top + ($clinit_DomGlobal() , $wnd.goog.global.window).pageYOffset - docElem.clientTop;
  position.left_0 = box.left + $wnd.goog.global.window.pageXOffset - docElem.clientLeft;
  return position;
}

function $removeWaves(this$static){
  $removeEventListener(this$static.target_0, ($clinit_EventType() , mousedown).name_0, this$static.wavesEventListener);
}

function $setupStopTimers(this$static){
  this$static.delayTimer = new Waves$1(this$static);
  $schedule(this$static.delayTimer, 300);
}

function $stopCurrentWave(this$static){
  !!this$static.delayTimer && $cancel(this$static.delayTimer);
  !!this$static.removeTimer && $cancel(this$static.removeTimer);
  !!this$static.ripple && $remove_8(this$static.ripple);
}

function Waves(target){
  this.wavesEventListener = new Waves$WavesEventListener(this);
  this.target_0 = target;
}

function lambda$0_1(style_0, rippleStyle_1, key_2){
  return $append_3($append_3($append_3((style_0.string += '' + key_2 , style_0), ':'), castToString(rippleStyle_1[key_2])), ';');
}

defineClass(247, 1, {}, Waves);
_.element_2 = function element_25(){
  return this.target_0.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_style_Waves_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves', 247);
function Waves$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(250, 110, {}, Waves$1);
_.run = function run_1(){
  this.this$01.rippleStyle['opacity '] = '0';
  $setAttribute(this.this$01.ripple, 'style', $convertStyle(this.this$01.rippleStyle));
  this.this$01.removeTimer = new Waves$1$1(this);
  $schedule(this.this$01.removeTimer, 750);
}
;
var Lorg_dominokit_domino_ui_style_Waves$1_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves/1', 250);
function Waves$1$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(251, 110, {}, Waves$1$1);
_.run = function run_2(){
  $remove_9(this.this$11.this$01.ripple.style_0, 'waves-rippling');
  $remove_8(this.this$11.this$01.ripple);
}
;
var Lorg_dominokit_domino_ui_style_Waves$1$1_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves/1/1', 251);
function Waves$ElementOffset(){
}

defineClass(248, 1, {}, Waves$ElementOffset);
_.left_0 = 0;
_.top_0 = 0;
var Lorg_dominokit_domino_ui_style_Waves$ElementOffset_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves/ElementOffset', 248);
function Waves$WavesEventListener(this$0){
  this.this$01 = this$0;
}

defineClass(249, 1, {}, Waves$WavesEventListener);
_.handleEvent = function handleEvent_16(evt){
  var clientWidth, mouseEvent, position, relativeX, relativeY, scale, scaleValue;
  mouseEvent = castToNative(evt, $wnd.MouseEvent);
  if (mouseEvent.button == 2) {
    return;
  }
  $stopCurrentWave(this.this$01);
  this.this$01.ripple = castTo($add_5((new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element)).style_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['waves-ripple', 'waves-rippling'])).wrapperElement, 5);
  $appendChild_0(this.this$01.target_0, this.this$01.ripple);
  position = $offset(this.this$01.target_0.wrappedElement);
  relativeY = mouseEvent.pageY - position.top_0;
  relativeX = mouseEvent.pageX - position.left_0;
  relativeY = relativeY >= 0?relativeY:0;
  relativeX = relativeX >= 0?relativeX:0;
  clientWidth = this.this$01.target_0.wrappedElement.clientWidth;
  scaleValue = clientWidth * 0.01 * 3;
  scale = 'scale(' + scaleValue + ')';
  this.this$01.rippleStyle = {};
  this.this$01.rippleStyle['top'] = relativeY + 'px';
  this.this$01.rippleStyle['left'] = relativeX + 'px';
  $add_4(this.this$01.ripple.style_0, 'waves-notransition');
  $setAttribute(this.this$01.ripple, 'style', $convertStyle(this.this$01.rippleStyle));
  $remove_9(this.this$01.ripple.style_0, 'waves-notransition');
  this.this$01.rippleStyle['-webkit-transform'] = scale + ' ' + 'translate(0,0)';
  this.this$01.rippleStyle['-moz-transform'] = scale + ' ' + 'translate(0,0)';
  this.this$01.rippleStyle['-ms-transform'] = scale + ' ' + 'translate(0,0)';
  this.this$01.rippleStyle['-o-transform'] = scale + ' ' + 'translate(0,0)';
  this.this$01.rippleStyle['transform'] = scale + ' ' + 'translate(0,0)';
  this.this$01.rippleStyle['opacity '] = '1';
  this.this$01.rippleStyle['-webkit-transition-duration'] = '750ms';
  this.this$01.rippleStyle['-moz-transition-duration'] = '750ms';
  this.this$01.rippleStyle['-o-transition-duration'] = '750ms';
  this.this$01.rippleStyle['transition-duration'] = '750ms';
  $setAttribute(this.this$01.ripple, 'style', $convertStyle(this.this$01.rippleStyle));
  $setupStopTimers(this.this$01);
}
;
var Lorg_dominokit_domino_ui_style_Waves$WavesEventListener_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves/WavesEventListener', 249);
function Waves$lambda$0$Type(style_0, rippleStyle_1){
  this.style_0 = style_0;
  this.rippleStyle_1 = rippleStyle_1;
}

defineClass(423, $wnd.Function, {}, Waves$lambda$0$Type);
_.onKey = function onKey(arg0){
  lambda$0_1(this.style_0, this.rippleStyle_1, arg0);
}
;
function $applyWaveStyle_0(this$static, waveStyle){
  $contains_3(this$static.element.style_0, 'waves-effect') || $initWaves_0(this$static);
  $contains_3(this$static.element.style_0, waveStyle.style_0) || $add_4(this$static.element.style_0, waveStyle.style_0);
  return this$static;
}

function $initWaves_0(this$static){
  $contains_3(this$static.element.style_0, 'waves-effect') || $add_4(this$static.element.style_0, 'waves-effect');
  $initWaves(this$static.wavesElement);
  return this$static;
}

function $removeWaveStyles(this$static){
  var i, style;
  for (i = 0; i < this$static.element.style_0.element.classList.length; ++i) {
    style = $item(this$static.element.style_0, i);
    style.indexOf('waves-') != -1 && $remove_9(this$static.element.style_0, style);
  }
}

function $removeWaves_0(this$static){
  $contains_3(this$static.element.style_0, 'waves-effect') && $remove_9(this$static.element.style_0, 'waves-effect');
  this$static.waveColor != null && $remove_9(this$static.element.style_0, this$static.waveColor);
  $removeWaveStyles(this$static);
  $removeWaves(this$static.wavesElement);
  return this$static;
}

function $setWaveColor_0(this$static, waveColor){
  $contains_3(this$static.element.style_0, 'waves-effect') || $initWaves_0(this$static);
  if (this$static.waveColor == null)
    $add_4(this$static.element.style_0, waveColor.style_0);
  else {
    $remove_9(this$static.element.style_0, this$static.waveColor);
    $add_4(this$static.element.style_0, waveColor.style_0);
  }
  this$static.waveColor = waveColor.style_0;
  return this$static;
}

function WavesSupport(targetElement){
  this.element = new DominoElement(targetElement);
  this.wavesElement = new Waves(this.element);
}

defineClass(86, 1, {}, WavesSupport);
var Lorg_dominokit_domino_ui_style_WavesSupport_2_classLit = createForClass('org.dominokit.domino.ui.style', 'WavesSupport', 86);
function $clinit_Theme(){
  $clinit_Theme = emptyMethod;
  themeChangeHandlers = new ArrayList;
  $clinit_ColorScheme();
  INDIGO_2 = INDIGO_0;
  currentTheme = new Theme(RED_0);
}

function $apply_0(this$static){
  !!currentTheme && ($clinit_DomGlobal() , document_0).body.classList.remove(currentTheme.themeStyle);
  currentTheme = this$static;
  $add_4(new Style(new Style$lambda$0$Type(($clinit_DomGlobal() , document_0).body)), this$static.themeStyle);
  $forEach_0(themeChangeHandlers, new Theme$lambda$0$Type);
}

function Theme(scheme){
  $clinit_Theme();
  this.themeStyle = $replace(scheme.color_1().getStyle(), 'col-', 'theme-');
  $replace(scheme.color_1().getName(), ' ', '_').toLowerCase();
}

defineClass(108, 1, {}, Theme);
var INDIGO_2, currentTheme, themeChangeHandlers;
var Lorg_dominokit_domino_ui_themes_Theme_2_classLit = createForClass('org.dominokit.domino.ui.themes', 'Theme', 108);
function Theme$lambda$0$Type(){
}

defineClass(220, 1, $intern_22, Theme$lambda$0$Type);
_.accept = function accept_26(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_themes_Theme$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.themes', 'Theme/lambda$0$Type', 220);
function $clinit_ToggleTarget(){
  $clinit_ToggleTarget = emptyMethod;
  ANY = new ToggleTarget('ANY', 0, 'tgl-any');
  ICON = new ToggleTarget('ICON', 1, 'tgl-icon');
}

function ToggleTarget(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_15(){
  $clinit_ToggleTarget();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_tree_ToggleTarget_2_classLit, 1), $intern_1, 96, 0, [ANY, ICON]);
}

defineClass(96, 13, {3:1, 20:1, 13:1, 96:1}, ToggleTarget);
var ANY, ICON;
var Lorg_dominokit_domino_ui_tree_ToggleTarget_2_classLit = createForEnum('org.dominokit.domino.ui.tree', 'ToggleTarget', 96, values_15);
function $appendChild_3(this$static, treeItem){
  this$static.root_0.appendChild(treeItem.element);
  treeItem.parent_0 = this$static;
  $setLevel(treeItem, 1);
  $setToggleTarget_0(treeItem, this$static.toggleTarget);
  $add_0(this$static.subItems, treeItem);
  return this$static;
}

function $setActiveItem(this$static, activeItem){
  !!this$static.activeTreeItem && !equals_Ljava_lang_Object__Z__devirtual$(this$static.activeTreeItem, activeItem) && $deactivate(this$static.activeTreeItem);
  this$static.activeTreeItem = activeItem;
  $add_4(new Style(new Style$lambda$0$Type(this$static.activeTreeItem.element)), 'active');
  $forEach_0(this$static.itemsClickListeners, new Tree$lambda$13$Type);
}

function $setToggleTarget(this$static, toggleTarget){
  if (toggleTarget) {
    $forEach_0(this$static.subItems, new Tree$lambda$1$Type(toggleTarget));
    this$static.toggleTarget = toggleTarget;
  }
  return this$static;
}

function Tree(){
  $clinit_Optional();
  this.title_0 = $css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('span'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['title'])).element;
  this.toggleTarget = ($clinit_ToggleTarget() , ANY);
  this.header = castToNative($add_7($css_0($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('li'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['header'])), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['menu-header'])), this.title_0).element, $wnd.HTMLLIElement);
  this.root_0 = castToNative($css_0($add_7(new HtmlContentBuilder(castToNative(document_0.createElement('ul'), $wnd.HTMLElement)), this.header), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['list'])).element, $wnd.HTMLUListElement);
  this.menu = castToNative($add_7($css_0($style(new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement)), 'overflow-x: hidden'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['menu'])), this.root_0).element, $wnd.HTMLDivElement);
  this.subItems = new ArrayList;
  this.itemsClickListeners = new ArrayList;
  $init(this, this);
  'GAME'.length == 0 && $hide(new DominoElement(this.header));
  this.title_0.textContent = 'GAME';
}

function lambda$1(toggleTarget_0, item_1){
  return $setToggleTarget_0(item_1, toggleTarget_0);
}

defineClass(160, 22, {}, Tree);
_.element_2 = function element_26(){
  return this.menu;
}
;
_.autoCollapse = true;
var Lorg_dominokit_domino_ui_tree_Tree_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree', 160);
function Tree$lambda$1$Type(toggleTarget_0){
  this.toggleTarget_0 = toggleTarget_0;
}

defineClass(193, 1, $intern_22, Tree$lambda$1$Type);
_.accept = function accept_27(arg0){
  lambda$1(this.toggleTarget_0, castTo(arg0, 61));
}
;
var Lorg_dominokit_domino_ui_tree_Tree$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$1$Type', 193);
function Tree$lambda$13$Type(){
}

defineClass(194, 1, $intern_22, Tree$lambda$13$Type);
_.accept = function accept_28(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_tree_Tree$lambda$13$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$13$Type', 194);
function $addClickListener_1(this$static, listener){
  castToNative(this$static.anchorElement.wrappedElement, $wnd.HTMLAnchorElement).addEventListener(($clinit_EventType() , click_0).name_0, listener);
  return this$static;
}

function $deactivate(this$static){
  $remove_9(new Style(new Style$lambda$0$Type(this$static.element)), 'active');
  $restoreIcon(this$static);
  if (this$static.subItems.size_0 != 0) {
    $forEach(this$static.subItems, new TreeItem$0methodref$deactivate$Type);
    this$static.parent_0.autoCollapse && $hide_0(this$static.collapsible);
  }
}

function $lambda$0_4(this$static, evt_0){
  evt_0.stopPropagation();
  this$static.subItems.size_0 != 0 && $toggleDisplay_0(this$static.collapsible);
  $setActiveItem(this$static.parent_0, this$static);
}

function $lambda$1_2(this$static, evt_0){
  evt_0.stopPropagation();
  this$static.subItems.size_0 != 0 && $toggleDisplay_0(this$static.collapsible);
  $setActiveItem(this$static.parent_0, this$static);
}

function $lambda$14(this$static, treeItem_0){
  $setLevel(treeItem_0, this$static.nextLevel);
}

function $lambda$3(this$static){
  $remove_9(new Style(this$static.anchorElement), 'toggled');
  $restoreIcon(this$static);
}

function $lambda$5_0(this$static){
  ($clinit_ToggleTarget() , ANY) == this$static.toggleTarget && this$static.subItems.size_0 != 0 && this$static.subItems.size_0 != 0 && $toggleDisplay_0(this$static.collapsible);
  $setActiveItem(this$static.parent_0, this$static);
}

function $lambda$9_0(this$static, evt_0){
  if (($clinit_ToggleTarget() , ICON) == this$static.toggleTarget) {
    evt_0.stopPropagation();
    this$static.subItems.size_0 != 0 && $toggleDisplay_0(this$static.collapsible);
  }
  $setActiveItem(this$static.parent_0, this$static);
}

function $restoreIcon(this$static){
  if (this$static.originalIcon) {
    $remove_8(this$static.icon_0);
    $insertFirst(this$static.anchorElement, this$static.originalIcon);
    this$static.icon_0 = this$static.originalIcon;
  }
   else {
    !!this$static.icon_0 && $remove_8(this$static.icon_0);
  }
}

function $setLevel(this$static, level){
  this$static.nextLevel = level + 1;
  this$static.subItems.size_0 != 0 && $forEach(this$static.subItems, new TreeItem$lambda$14$Type(this$static));
  $setPaddingLeft(this$static.anchorElement.style_0, $of(($clinit_Unit() , px), valueOf(this$static.nextLevel * 15)));
}

function $setToggleTarget_0(this$static, toggleTarget){
  if (toggleTarget) {
    !!this$static.toggleTarget && $removeCss(this$static, this$static.toggleTarget.style_0);
    this$static.toggleTarget = toggleTarget;
    $css(this$static, this$static.toggleTarget.style_0);
    ($clinit_ToggleTarget() , ICON) == toggleTarget?!!this$static.icon_0 && $setClickable(this$static.icon_0, true):!!this$static.icon_0 && $setClickable(this$static.icon_0, false);
    $forEach(this$static.subItems, new TreeItem$lambda$6$Type(toggleTarget));
  }
  return this$static;
}

function TreeItem(icon){
  var lastArg, lastArg0, titleElement, toggleContainer;
  WavesElement.call(this);
  this.subItems = new LinkedList;
  this.toggleTarget = ($clinit_ToggleTarget() , ANY);
  this.indicatorContainer = new DominoElement($css_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('span'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['tree-indicator'])).element);
  this.icon_0 = icon;
  this.originalIcon = $setColor(create_2(icon.name_0), icon.color_0);
  $equals_0(icon.icon_0.wrappedElement.style.visibility, 'hidden') && $styler(this.originalIcon, new TreeItem$lambda$8$Type);
  $addClickListener_0(this.originalIcon, new TreeItem$lambda$9$Type(this));
  titleElement = $textContent($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['title'])), 'Startseite').element;
  toggleContainer = new DominoElement($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['tree-tgl-icn'])).element);
  this.anchorElement = new DominoElement($add_6($add_6($add_6($add_6(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), this.icon_0), $add_7($style($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['ellipsis-text'])), 'margin-top: 2px;'), titleElement)), $appendChild_0(castTo($appendChild_0(toggleContainer, $addClickListener_0($clickable(castTo($css($setSize_0(new MdiIcon((lastArg0 = 'mdi-plus' , new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Math'])) , new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['add'])) , lastArg0)), ($clinit_MdiIcon$MdiSize() , mdi18)), 'tree-tgl-collapsed'), 85)), new TreeItem$lambda$0$Type(this))), 5), $addClickListener_0($clickable(castTo($css($setSize_0(new MdiIcon((lastArg = 'mdi-minus' , new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Math'])) , new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['remove', 'horizontal-line'])) , lastArg)), mdi18), 'tree-tgl-expanded'), 85)), new TreeItem$lambda$1$Type(this)))), this.indicatorContainer).element);
  this.element = castToNative((new HtmlContentBuilder(castToNative(document_0.createElement('li'), $wnd.HTMLElement))).element, $wnd.HTMLLIElement);
  this.element.appendChild(this.anchorElement.wrappedElement);
  this.childrenContainer = castToNative($css_0(new HtmlContentBuilder(castToNative(document_0.createElement('ul'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['ml-tree'])).element, $wnd.HTMLUListElement);
  this.element.appendChild(this.childrenContainer);
  this.collapsible = $hide_0($addShowHandler($addHideHandler(new Collapsible(this.childrenContainer), new TreeItem$lambda$3$Type(this)), new TreeItem$lambda$4$Type(this)));
  $addEventListener(this.anchorElement, 'click', new TreeItem$lambda$5$Type(this));
  $init(this, this);
  this.wavesSupport = $initWaves_0(new WavesSupport(this.anchorElement.wrappedElement));
  $setToggleTarget_0(this, ANY);
  $setWaveColor(this, ($clinit_WaveColor() , THEME));
  $applyWaveStyle(this, ($clinit_WaveStyle() , BLOCK));
}

function lambda$6(toggleTarget_0, item_1){
  return $setToggleTarget_0(item_1, toggleTarget_0);
}

defineClass(61, 139, {61:1}, TreeItem);
_.element_2 = function element_27(){
  return this.element;
}
;
_.getClickableElement = function getClickableElement_1(){
  return castToNative(this.anchorElement.wrappedElement, $wnd.HTMLAnchorElement);
}
;
_.nextLevel = 1;
var Lorg_dominokit_domino_ui_tree_TreeItem_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem', 61);
function TreeItem$0methodref$deactivate$Type(){
}

defineClass(201, 1, $intern_22, TreeItem$0methodref$deactivate$Type);
_.accept = function accept_29(arg0){
  $deactivate(castTo(arg0, 61));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$0methodref$deactivate$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/0methodref$deactivate$Type', 201);
function TreeItem$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(195, 1, {}, TreeItem$lambda$0$Type);
_.handleEvent = function handleEvent_17(arg0){
  $lambda$0_4(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$0$Type', 195);
function TreeItem$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(196, 1, {}, TreeItem$lambda$1$Type);
_.handleEvent = function handleEvent_18(arg0){
  $lambda$1_2(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$1$Type', 196);
function TreeItem$lambda$14$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(204, 1, $intern_22, TreeItem$lambda$14$Type);
_.accept = function accept_30(arg0){
  $lambda$14(this.$$outer_0, castTo(arg0, 61));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$14$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$14$Type', 204);
function TreeItem$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(197, 1, {376:1}, TreeItem$lambda$3$Type);
_.onHidden = function onHidden_0(){
  $lambda$3(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$3$Type', 197);
function TreeItem$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(198, 1, {377:1}, TreeItem$lambda$4$Type);
_.onShown = function onShown_0(){
  $add_4(new Style(this.$$outer_0.anchorElement), 'toggled');
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$4$Type', 198);
function TreeItem$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(199, 1, {}, TreeItem$lambda$5$Type);
_.handleEvent = function handleEvent_19(arg0){
  $lambda$5_0(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$5$Type', 199);
function TreeItem$lambda$6$Type(toggleTarget_0){
  this.toggleTarget_0 = toggleTarget_0;
}

defineClass(200, 1, $intern_22, TreeItem$lambda$6$Type);
_.accept = function accept_31(arg0){
  lambda$6(this.toggleTarget_0, castTo(arg0, 61));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$6$Type', 200);
function TreeItem$lambda$8$Type(){
}

defineClass(202, 1, {}, TreeItem$lambda$8$Type);
_.applyStyles = function applyStyles_1(arg0){
  arg0.element.style.setProperty('visibility', 'hidden');
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$8$Type', 202);
function TreeItem$lambda$9$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(203, 1, {}, TreeItem$lambda$9$Type);
_.handleEvent = function handleEvent_20(arg0){
  $lambda$9_0(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$9$Type', 203);
function $clinit_BodyObserver(){
  $clinit_BodyObserver = emptyMethod;
  detachObservers = new ArrayList;
  attachObservers = new ArrayList;
}

function addAttachObserver(element, callback){
  $clinit_BodyObserver();
  var observer;
  ready || startObserving();
  observer = createObserver(element, callback, ATTACH_UID_KEY, new BodyObserver$lambda$1$Type);
  $add_0(attachObservers, observer);
  return observer;
}

function createObserver(element, callback, idAttributeName, onRemoveHandler){
  var elementId;
  elementId = element.getAttribute(idAttributeName);
  elementId == null && element.setAttribute(idAttributeName, unique());
  return new BodyObserver$1(element, idAttributeName, callback, onRemoveHandler);
}

function isChildOfAddedNode(record, attachId){
  return isChildOfObservedNode(attachId, $asList(record.addedNodes), ATTACH_UID_KEY);
}

function isChildOfObservedNode(attachId, nodes, attachUidKey){
  var elementNode, i;
  for (i = 0; i < nodes.array.length; i++) {
    elementNode = (checkCriticalElementIndex(i, nodes.array.length) , nodes.array[i]);
    if (($clinit_Node() , ELEMENT_NODE) == elementNode.nodeType) {
      if (elementNode.querySelector('[' + attachUidKey + "='" + attachId + "']") != null) {
        return true;
      }
    }
  }
  return false;
}

function isChildOfRemovedNode(record, detachId){
  return isChildOfObservedNode(detachId, $asList(record.removedNodes), DETACH_UID_KEY);
}

function lambda$0_2(records_0){
  $clinit_BodyObserver();
  var record, record$array, record$index, record$max, recordsArray;
  recordsArray = stampJavaTypeInfo_1(records_0, newArray(records_0.length));
  for (record$array = recordsArray , record$index = 0 , record$max = record$array.length; record$index < record$max; ++record$index) {
    record = record$array[record$index];
    $asList(record.removedNodes).array.length == 0 || onElementsRemoved(record);
    $asList(record.addedNodes).array.length == 0 || onElementsAppended(record);
  }
  return null;
}

function lambda$1_0(elementObserver_0){
  $clinit_BodyObserver();
  return $remove_3(attachObservers, elementObserver_0);
}

function lambda$2(elementObserver_0){
  $clinit_BodyObserver();
  return $remove_3(detachObservers, elementObserver_0);
}

function onElementsAppended(record){
  var elementObserver, elementObserver$iterator, nodes, observed;
  nodes = $asList(record.addedNodes);
  observed = new ArrayList;
  for (elementObserver$iterator = new ArrayList$1(attachObservers); elementObserver$iterator.i < elementObserver$iterator.this$01.array.length;) {
    elementObserver = castTo($next_0(elementObserver$iterator), 93);
    if (elementObserver.val$element1 == null) {
      observed.array[observed.array.length] = elementObserver;
    }
     else {
      if ($indexOf(nodes, elementObserver.val$element1) != -1 || isChildOfAddedNode(record, elementObserver.val$element1.getAttribute(elementObserver.val$idAttributeName2))) {
        elementObserver.val$callback3.onObserved(record);
        observed.array[observed.array.length] = elementObserver;
      }
    }
  }
  $removeAll(attachObservers, observed);
}

function onElementsRemoved(record){
  var elementObserver, elementObserver$iterator, nodes, observed;
  nodes = $asList(record.removedNodes);
  observed = new ArrayList;
  for (elementObserver$iterator = new ArrayList$1(detachObservers); elementObserver$iterator.i < elementObserver$iterator.this$01.array.length;) {
    elementObserver = castTo($next_0(elementObserver$iterator), 93);
    if (elementObserver.val$element1 == null) {
      observed.array[observed.array.length] = elementObserver;
    }
     else {
      if ($indexOf(nodes, elementObserver.val$element1) != -1 || isChildOfRemovedNode(record, elementObserver.val$element1.getAttribute(elementObserver.val$idAttributeName2))) {
        elementObserver.val$callback3.onObserved(record);
        observed.array[observed.array.length] = elementObserver;
      }
    }
  }
  $removeAll(detachObservers, observed);
}

function startObserving(){
  var mutationObserver, mutationObserverInit;
  mutationObserver = new $wnd.MutationObserver(makeLambdaFunction(BodyObserver$lambda$0$Type.prototype.onInvoke_3, BodyObserver$lambda$0$Type, []));
  mutationObserverInit = {};
  mutationObserverInit.childList = true;
  mutationObserverInit.subtree = true;
  mutationObserver.observe(($clinit_DomGlobal() , document_0).body, mutationObserverInit);
  ready = true;
}

var ATTACH_UID_KEY = 'on-attach-uid', DETACH_UID_KEY = 'on-detach-uid', attachObservers, detachObservers, ready = false;
function $remove_11(this$static){
  this$static.val$onRemoveHandler4.accept(this$static);
}

function BodyObserver$1(val$element, val$idAttributeName, val$callback, val$onRemoveHandler){
  this.val$element1 = val$element;
  this.val$idAttributeName2 = val$idAttributeName;
  this.val$callback3 = val$callback;
  this.val$onRemoveHandler4 = val$onRemoveHandler;
}

defineClass(343, 1, {93:1}, BodyObserver$1);
var Lorg_dominokit_domino_ui_utils_BodyObserver$1_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BodyObserver/1', 343);
function BodyObserver$lambda$0$Type(){
}

defineClass(424, $wnd.Function, {}, BodyObserver$lambda$0$Type);
_.onInvoke_3 = function onInvoke_0(arg0, arg1){
  return lambda$0_2(arg0);
}
;
function BodyObserver$lambda$1$Type(){
}

defineClass(341, 1, $intern_22, BodyObserver$lambda$1$Type);
_.accept = function accept_32(arg0){
  lambda$1_0(castTo(arg0, 93));
}
;
var Lorg_dominokit_domino_ui_utils_BodyObserver$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BodyObserver/lambda$1$Type', 341);
function BodyObserver$lambda$2$Type(){
}

defineClass(342, 1, $intern_22, BodyObserver$lambda$2$Type);
_.accept = function accept_33(arg0){
  lambda$2(castTo(arg0, 93));
}
;
var Lorg_dominokit_domino_ui_utils_BodyObserver$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BodyObserver/lambda$2$Type', 342);
function DominoElement(element){
  BaseDominoElement.call(this);
  this.wrappedElement = element;
  $init(this, this);
}

defineClass(5, 22, {5:1}, DominoElement);
_.element_2 = function element_28(){
  return this.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_utils_DominoElement_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'DominoElement', 5);
function $clinit_ElementUtil(){
  $clinit_ElementUtil = emptyMethod;
  $getNumberConstants(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance));
}

function clear_0(element){
  $clinit_ElementUtil();
  if (element != null) {
    while (element.firstChild != null) {
      element.removeChild(element.firstChild);
    }
  }
}

function onAttach(element, callback){
  $clinit_ElementUtil();
  if (element != null) {
    return $clinit_Optional() , new Optional(checkCriticalNotNull(addAttachObserver(element, callback)));
  }
  return $clinit_Optional() , $clinit_Optional() , EMPTY;
}

function onAttach_0(element, callback){
  $clinit_ElementUtil();
  return $clinit_Optional() , new Optional(checkCriticalNotNull(addAttachObserver(element.wrappedElement, callback)));
}

function onDetach(element, callback){
  var observer;
  $clinit_ElementUtil();
  if (element != null) {
    return $clinit_Optional() , new Optional(checkCriticalNotNull(($clinit_BodyObserver() , ready || startObserving() , observer = createObserver(element, callback, DETACH_UID_KEY, new BodyObserver$lambda$2$Type) , $add_0(detachObservers, observer) , observer)));
  }
  return $clinit_Optional() , $clinit_Optional() , EMPTY;
}

function of_1(content_0){
  if (content_0 == null || content_0.length == 0) {
    return ($clinit_DomGlobal() , document_0).createTextNode('');
  }
  return ($clinit_DomGlobal() , document_0).createTextNode(content_0);
}

function $clinit_LocaleInfo(){
  $clinit_LocaleInfo = emptyMethod;
  instance = new LocaleInfo;
}

function $getNumberConstants(this$static){
  !this$static.numberConstants && (this$static.numberConstants = new NumberConstantsImpl);
  return this$static.numberConstants;
}

function LocaleInfo(){
}

defineClass(246, 1, {}, LocaleInfo);
var instance;
var Lorg_gwtproject_i18n_shared_cldr_LocaleInfo_2_classLit = createForClass('org.gwtproject.i18n.shared.cldr', 'LocaleInfo', 246);
function NumberConstantsImpl(){
}

defineClass(307, 1, {}, NumberConstantsImpl);
var Lorg_gwtproject_i18n_shared_cldr_impl_NumberConstantsImpl_2_classLit = createForClass('org.gwtproject.i18n.shared.cldr.impl', 'NumberConstantsImpl', 307);
function Timer$lambda$0$Type(timer_0){
  this.timer_0 = timer_0;
}

defineClass(408, $wnd.Function, {}, Timer$lambda$0$Type);
_.onInvoke_0 = function onInvoke_1(arg0){
  lambda$0(this.timer_0);
}
;
function $attr(this$static, name_0, value_0){
  this$static.element.setAttribute(name_0, value_0);
  return this$static;
}

function $css_0(this$static, classes){
  var c, c$array, c$index, c$max, failSafeClass, failSafeClass$iterator, failSafeClasses;
  failSafeClasses = new ArrayList;
  for (c$array = classes , c$index = 0 , c$max = c$array.length; c$index < c$max; ++c$index) {
    c = c$array[c$index];
    c != null && (c.indexOf(' ') != -1?$addAll(failSafeClasses, new Arrays$ArrayList($split(c))):(failSafeClasses.array[failSafeClasses.array.length] = c , true));
  }
  for (failSafeClass$iterator = new ArrayList$1(failSafeClasses); failSafeClass$iterator.i < failSafeClass$iterator.this$01.array.length;) {
    failSafeClass = castToString($next_0(failSafeClass$iterator));
    this$static.element.classList.add(failSafeClass);
  }
  return this$static;
}

function $id(this$static, id_0){
  this$static.element.id = id_0;
  return this$static;
}

function $style(this$static, style){
  this$static.element.style.cssText = style;
  return this$static;
}

function ElementBuilder(element){
  this.element = requireNonNull(element);
}

defineClass(144, 1, {});
_.element_2 = function element_29(){
  return this.element;
}
;
var Lorg_jboss_elemento_ElementBuilder_2_classLit = createForClass('org.jboss.elemento', 'ElementBuilder', 144);
function $clinit_EventType(){
  $clinit_EventType = emptyMethod;
  new EventType('online');
  new EventType('offline');
  new EventType('focus');
  blur_0 = new EventType('blur');
  new EventType('pagehide');
  new EventType('pageshow');
  new EventType('popstate');
  new EventType('reset');
  new EventType('submit');
  new EventType('beforeprint');
  new EventType('afterprint');
  new EventType('compositionstart');
  new EventType('compositionupdate');
  new EventType('compositionend');
  new EventType('fullscreenchange');
  new EventType('fullscreenerror');
  new EventType('resize');
  new EventType('scroll');
  new EventType('cut');
  new EventType('copy');
  new EventType('paste');
  new EventType('keydown');
  new EventType('keypress');
  new EventType('keyup');
  mouseenter = new EventType('mouseenter');
  new EventType('mouseover');
  new EventType('mousemove');
  mousedown = new EventType('mousedown');
  new EventType('mouseup');
  new EventType('auxclick');
  click_0 = new EventType('click');
  new EventType('dblclick');
  new EventType('contextmenu');
  new EventType('wheel');
  mouseleave = new EventType('mouseleave');
  new EventType('mouseout');
  new EventType('pointerlockchange');
  new EventType('pointerlockerror');
  new EventType('dragstart');
  new EventType('drag');
  new EventType('dragend');
  new EventType('dragenter');
  new EventType('dragover');
  new EventType('dragleave');
  new EventType('drop');
  new EventType('touchcancel');
  new EventType('touchend');
  new EventType('touchmove');
  new EventType('touchstart');
  new EventType('hashchange');
  new EventType('input');
  new EventType('readystatechange');
  new EventType('change');
  new EventType('search');
  new EventType('invalid');
  new EventType('show');
  new EventType('message');
  new EventType('storage');
  new EventType('load');
  new EventType('visibilitychange');
}

function EventType(name_0){
  this.name_0 = name_0;
}

defineClass(8, 1, {}, EventType);
var blur_0, click_0, mousedown, mouseenter, mouseleave;
var Lorg_jboss_elemento_EventType_2_classLit = createForClass('org.jboss.elemento', 'EventType', 8);
function $add_6(this$static, element){
  if (element) {
    return $add_7(this$static, element.element_2());
  }
  return this$static;
}

function $add_7(this$static, element){
  return this$static.element.appendChild(element) , this$static;
}

function $textContent(this$static, text_0){
  return this$static.element.textContent = text_0 , this$static;
}

function HtmlContentBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(7, 144, {}, HtmlContentBuilder);
var Lorg_jboss_elemento_HtmlContentBuilder_2_classLit = createForClass('org.jboss.elemento', 'HtmlContentBuilder', 7);
function unique(){
  var id_0;
  do {
    id_0 = 'id-' + counter;
    ++counter;
  }
   while (($clinit_DomGlobal() , document_0).getElementById(id_0) != null);
  return id_0;
}

var counter = 0;
function InputBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(368, 144, {}, InputBuilder);
var Lorg_jboss_elemento_InputBuilder_2_classLit = createForClass('org.jboss.elemento', 'InputBuilder', 368);
function $clearContent(this$static){
  var contentPanel;
  contentPanel = new DominoElement(this$static._layout.content_0.contentContainer);
  clear_0(contentPanel.wrappedElement);
  return contentPanel;
}

function $createGame(this$static){
  $appendChild_0($clearContent(this$static), new StartGameForm(this$static._communication, this$static._userInfo, new App$5methodref$gameStarted$Type(this$static)));
}

function $createSVG(height){
  var result;
  result = castToNative(($clinit_DomGlobal() , document_0).createElementNS('http://www.w3.org/2000/svg', 'svg'), $wnd.SVGSVGElement);
  result.width.baseVal.newValueSpecifiedUnits(round_int(($clinit_SVGLength() , SVG_LENGTHTYPE_PX)), 1000);
  result.height.baseVal.newValueSpecifiedUnits(round_int(SVG_LENGTHTYPE_PX), height);
  return result;
}

function $ensureLogin(this$static, okClicked){
  !this$static._userInfo?$appendChild_0($clearContent(this$static), $setContinuation(new LoginForm(this$static._communication), new App$lambda$8$Type(this$static, okClicked))):okClicked.run();
}

function $homeClicked(this$static){
  var contentPanel;
  contentPanel = $clearContent(this$static);
  $appendChild_0(contentPanel, $addColumn($addColumn($addColumn(new Row_12, castTo($appendChild_0($onXSmall($onSmall($onMedium($onLarge($onXLarge(new Column, new Column$OnXLarge(of_0(4))), new Column$OnLarge(of_0(4))), new Column$OnMedium(of_0(4))), new Column$OnSmall(of_0(-1))), new Column$OnXSmall(of_0(-1))), $addClickListener(castTo($withWaves(create_1('Starte Spiel', 'Starte ein neues Spiel und lade andere Leute im Netzwerk dazu ein.')), 30), new App$1methodref$startGameClicked$Type(this$static))), 31)), castTo($appendChild_0($onXSmall($onSmall($onMedium($onLarge($onXLarge(new Column, new Column$OnXLarge(of_0(4))), new Column$OnLarge(of_0(4))), new Column$OnMedium(of_0(4))), new Column$OnSmall(of_0(-1))), new Column$OnXSmall(of_0(-1))), $addClickListener(castTo($withWaves(create_1('Mitspielen', 'Suche ein Spiel, das ein anderer gestartet hat und spiele dort mit.')), 30), new App$2methodref$joinGameClicked$Type(this$static))), 31)), castTo($appendChild_0($onXSmall($onSmall($onMedium($onLarge($onXLarge(new Column, new Column$OnXLarge(of_0(4))), new Column$OnLarge(of_0(4))), new Column$OnMedium(of_0(4))), new Column$OnSmall(of_0(-1))), new Column$OnXSmall(of_0(-1))), $addClickListener(castTo($withWaves(create_1('Lokal spielen', 'Spiele f\xFCr dich gegen einen Computer-Gegner nur auf deinem Rechner.')), 30), new App$3methodref$playLocallyClicked$Type(this$static))), 31)));
  $hideLeftPanel(this$static._layout);
}

function $joinGame(this$static){
  var lastArg;
  $appendChild_0($clearContent(this$static), new JoinGameForm((lastArg = this$static._communication , new App$7methodref$gameStarted$Type(this$static) , lastArg)));
}

function $joinGameClicked(this$static){
  $ensureLogin(this$static, new App$6methodref$joinGame$Type(this$static));
}

function $lambda$8_0(this$static, okClicked_1, userInfo_1){
  this$static._userInfo = userInfo_1;
  okClicked_1.run();
}

function $onModuleLoad_0(this$static){
  var contentPanel, treeItem;
  this$static._layout = new Layout;
  $appendChild_0(new DominoElement(this$static._layout.section.leftSide), $appendChild_3($setToggleTarget(new Tree, ($clinit_ToggleTarget() , ICON)), $addClickListener_1((treeItem = new TreeItem(create_2('home')) , treeItem), new App$0methodref$homeClicked$Type(this$static))));
  contentPanel = $clearContent(this$static);
  $appendChild_0(contentPanel, $addColumn($addColumn($addColumn(new Row_12, castTo($appendChild_0($onXSmall($onSmall($onMedium($onLarge($onXLarge(new Column, new Column$OnXLarge(of_0(4))), new Column$OnLarge(of_0(4))), new Column$OnMedium(of_0(4))), new Column$OnSmall(of_0(-1))), new Column$OnXSmall(of_0(-1))), $addClickListener(castTo($withWaves(create_1('Starte Spiel', 'Starte ein neues Spiel und lade andere Leute im Netzwerk dazu ein.')), 30), new App$1methodref$startGameClicked$Type(this$static))), 31)), castTo($appendChild_0($onXSmall($onSmall($onMedium($onLarge($onXLarge(new Column, new Column$OnXLarge(of_0(4))), new Column$OnLarge(of_0(4))), new Column$OnMedium(of_0(4))), new Column$OnSmall(of_0(-1))), new Column$OnXSmall(of_0(-1))), $addClickListener(castTo($withWaves(create_1('Mitspielen', 'Suche ein Spiel, das ein anderer gestartet hat und spiele dort mit.')), 30), new App$2methodref$joinGameClicked$Type(this$static))), 31)), castTo($appendChild_0($onXSmall($onSmall($onMedium($onLarge($onXLarge(new Column, new Column$OnXLarge(of_0(4))), new Column$OnLarge(of_0(4))), new Column$OnMedium(of_0(4))), new Column$OnSmall(of_0(-1))), new Column$OnXSmall(of_0(-1))), $addClickListener(castTo($withWaves(create_1('Lokal spielen', 'Spiele f\xFCr dich gegen einen Computer-Gegner nur auf deinem Rechner.')), 30), new App$3methodref$playLocallyClicked$Type(this$static))), 31)));
  $show_1(this$static._layout, ($clinit_ColorScheme() , INDIGO_0));
  this$static._communication = $start_0(new Communication);
}

function $showGameScreen(this$static){
  var contentPanel, spielfeld, spielfeldAnzeige, spielfeldDarstellung, stapel, vorrat, vorratsAnzeige;
  contentPanel = $clearContent(this$static);
  stapel = new Nachzugstapel;
  spielfeldAnzeige = $createSVG(800);
  contentPanel.element_0.element_2().appendChild(spielfeldAnzeige);
  vorratsAnzeige = $createSVG(100);
  contentPanel.element_0.element_2().appendChild(vorratsAnzeige);
  spielfeld = new Spielfeld;
  $set_0(spielfeld, 0, 0, new Qwirkle$Stein(($clinit_Qwirkle$Farbe() , red), ($clinit_Qwirkle$Form() , circle)));
  $set_0(spielfeld, 0, 1, new Qwirkle$Stein(red, square));
  $set_0(spielfeld, 1, 0, new Qwirkle$Stein(green, circle));
  spielfeldDarstellung = new SpielfeldDarstellung(spielfeldAnzeige, spielfeld);
  $zeigeAn(spielfeldDarstellung);
  vorrat = new Vorrat(vorratsAnzeige, stapel);
  $fülleAuf(vorrat);
  $starteZug(vorrat, spielfeldDarstellung);
}

function $startGameClicked(this$static){
  $ensureLogin(this$static, new App$4methodref$createGame$Type(this$static));
}

function App(){
}

defineClass(155, 1, {78:1}, App);
_.visit = function visit(self_0, arg){
  return null;
}
;
_.visit_0 = function visit_0(self_0, arg){
  return null;
}
;
var Lqwirkle_app_client_App_2_classLit = createForClass('qwirkle.app.client', 'App', 155);
function App$0methodref$homeClicked$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(161, 1, {}, App$0methodref$homeClicked$Type);
_.handleEvent = function handleEvent_21(arg0){
  $homeClicked(this.$$outer_0);
}
;
var Lqwirkle_app_client_App$0methodref$homeClicked$Type_2_classLit = createForClass('qwirkle.app.client', 'App/0methodref$homeClicked$Type', 161);
function App$1methodref$startGameClicked$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(126, 1, {}, App$1methodref$startGameClicked$Type);
_.handleEvent = function handleEvent_22(arg0){
  $startGameClicked(this.$$outer_0);
}
;
var Lqwirkle_app_client_App$1methodref$startGameClicked$Type_2_classLit = createForClass('qwirkle.app.client', 'App/1methodref$startGameClicked$Type', 126);
function App$2methodref$joinGameClicked$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(127, 1, {}, App$2methodref$joinGameClicked$Type);
_.handleEvent = function handleEvent_23(arg0){
  $joinGameClicked(this.$$outer_0);
}
;
var Lqwirkle_app_client_App$2methodref$joinGameClicked$Type_2_classLit = createForClass('qwirkle.app.client', 'App/2methodref$joinGameClicked$Type', 127);
function App$3methodref$playLocallyClicked$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(128, 1, {}, App$3methodref$playLocallyClicked$Type);
_.handleEvent = function handleEvent_24(arg0){
  $showGameScreen(this.$$outer_0);
}
;
var Lqwirkle_app_client_App$3methodref$playLocallyClicked$Type_2_classLit = createForClass('qwirkle.app.client', 'App/3methodref$playLocallyClicked$Type', 128);
function App$4methodref$createGame$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(167, 1, {135:1}, App$4methodref$createGame$Type);
_.run = function run_3(){
  $createGame(this.$$outer_0);
}
;
var Lqwirkle_app_client_App$4methodref$createGame$Type_2_classLit = createForClass('qwirkle.app.client', 'App/4methodref$createGame$Type', 167);
function $accept_0(this$static, arg0){
  var lastArg;
  $showGameScreen((lastArg = this$static.$$outer_0 , castTo(arg0, 52) , lastArg));
}

function App$5methodref$gameStarted$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(168, 1, $intern_22, App$5methodref$gameStarted$Type);
_.accept = function accept_34(arg0){
  $accept_0(this, arg0);
}
;
var Lqwirkle_app_client_App$5methodref$gameStarted$Type_2_classLit = createForClass('qwirkle.app.client', 'App/5methodref$gameStarted$Type', 168);
function App$6methodref$joinGame$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(170, 1, {135:1}, App$6methodref$joinGame$Type);
_.run = function run_4(){
  $joinGame(this.$$outer_0);
}
;
var Lqwirkle_app_client_App$6methodref$joinGame$Type_2_classLit = createForClass('qwirkle.app.client', 'App/6methodref$joinGame$Type', 170);
function App$7methodref$gameStarted$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(171, 1, $intern_22, App$7methodref$gameStarted$Type);
_.accept = function accept_35(arg0){
  var lastArg;
  $showGameScreen((lastArg = this.$$outer_0 , castTo(arg0, 52) , lastArg));
}
;
var Lqwirkle_app_client_App$7methodref$gameStarted$Type_2_classLit = createForClass('qwirkle.app.client', 'App/7methodref$gameStarted$Type', 171);
function App$lambda$8$Type($$outer_0, okClicked_1){
  this.$$outer_0 = $$outer_0;
  this.okClicked_1 = okClicked_1;
}

defineClass(174, 1, $intern_22, App$lambda$8$Type);
_.accept = function accept_36(arg0){
  $lambda$8_0(this.$$outer_0, this.okClicked_1, castTo(arg0, 45));
}
;
var Lqwirkle_app_client_App$lambda$8$Type_2_classLit = createForClass('qwirkle.app.client', 'App/lambda$8$Type', 174);
function $add_8(this$static, position){
  var x_0, y_0;
  x_0 = position._x;
  y_0 = position._y;
  this$static._x1 = $wnd.Math.min(this$static._x1, x_0);
  this$static._y1 = $wnd.Math.min(this$static._y1, y_0);
  this$static._x2 = $wnd.Math.max(this$static._x2, x_0);
  this$static._y2 = $wnd.Math.max(this$static._y2, y_0);
  $add_2(this$static._positionen, position);
}

function $enthält(this$static, position){
  return $contains_0(this$static._positionen, position);
}

function $nachbarBesetztIn(this$static, spielfeld){
  var entry, inBereich, inBereich$iterator, nachbar, nachbar$iterator, outerIter;
  for (inBereich$iterator = (outerIter = (new AbstractMap$1(this$static._positionen.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter)); inBereich$iterator.val$outerIter2.hasNext_0();) {
    inBereich = (entry = castTo(inBereich$iterator.val$outerIter2.next_1(), 23) , castTo(entry.getKey(), 21));
    for (nachbar$iterator = new AbstractList$IteratorImpl(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_client_Position_2_classLit, 1), $intern_0, 21, 0, [new Position_0(inBereich._x, inBereich._y - 1), new Position_0(inBereich._x, inBereich._y + 1), new Position_0(inBereich._x - 1, inBereich._y), new Position_0(inBereich._x + 1, inBereich._y)]))); nachbar$iterator.i < nachbar$iterator.this$01_0.size_1();) {
      nachbar = (checkCriticalElement(nachbar$iterator.i < nachbar$iterator.this$01_0.size_1()) , castTo(nachbar$iterator.this$01_0.get_1(nachbar$iterator.last = nachbar$iterator.i++), 21));
      if ($contains_0(this$static._positionen, nachbar)) {
        continue;
      }
      if ($get_2(spielfeld, nachbar._x, nachbar._y)) {
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
  $add_2(this._positionen, new Position_0(x_0, y_0));
}

defineClass(119, 1, {}, Bereich);
_.iterator = function iterator_11(){
  var outerIter;
  return outerIter = (new AbstractMap$1(this._positionen.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter);
}
;
_._x1 = 0;
_._x2 = 0;
_._y1 = 0;
_._y2 = 0;
var Lqwirkle_app_client_Bereich_2_classLit = createForClass('qwirkle.app.client', 'Bereich', 119);
function $addListener(this$static, type_0, listener){
  $put(this$static._listeners, type_0, listener);
  return new Communication$lambda$2$Type(this$static, type_0, listener);
}

function $handle(this$static, self_0){
  var consumer;
  ($clinit_DomGlobal() , $wnd.goog.global.console).info('Received: ', self_0);
  consumer = castTo($get(this$static._listeners, self_0.___clazz), 9);
  !!consumer && consumer.accept(self_0);
  return null;
}

function $initMessageId(this$static, message){
  var msgId;
  msgId = '' + this$static._nextId++;
  message._msgId = msgId;
  return msgId;
}

function $lambda$1_3(this$static, evt_0){
  var data_0, ex, message;
  try {
    data_0 = evt_0.data;
    message = readServerMessage(new JsonReader(new StringR(data_0)));
    message.visit_2(this$static, null);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 46)) {
      ex = $e0;
      ($clinit_DomGlobal() , $wnd.goog.global.console).info('Parsing message failed.', ex);
    }
     else 
      throw toJs($e0);
  }
}

function $removeListener(this$static, type_0, listener){
  if (maskUndefined($get(this$static._listeners, type_0)) !== maskUndefined(listener)) {
    return false;
  }
  $remove(this$static._listeners, type_0);
  return true;
}

function $send(this$static, message){
  var ex, out;
  try {
    out = new StringW;
    $writeTo(message, new JsonWriter(out));
    this$static._socket.send(out._buffer.string);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 46)) {
      ex = $e0;
      ($clinit_DomGlobal() , $wnd.goog.global.console).info('Sending message failed.', ex);
    }
     else 
      throw toJs($e0);
  }
}

function $sendRequest(this$static, message, onResponse){
  var msgId;
  msgId = $initMessageId(this$static, message);
  $putStringValue(this$static._handlers, msgId, onResponse);
  $send(this$static, message);
}

function $start_0(this$static){
  this$static._socket = new $wnd.WebSocket('ws://localhost:8080/qwirkle/talk');
  this$static._socket.onopen = makeLambdaFunction(Communication$lambda$0$Type.prototype.onInvoke, Communication$lambda$0$Type, []);
  this$static._socket.onmessage = makeLambdaFunction(Communication$lambda$1$Type.prototype.onInvoke_2, Communication$lambda$1$Type, [this$static]);
  return this$static;
}

function $visit(self_0){
  ($clinit_DomGlobal() , $wnd.goog.global.console).info('Received: ', self_0);
  return null;
}

function Communication(){
  this._handlers = new HashMap;
  this._listeners = new HashMap;
}

defineClass(162, 1, {78:1, 134:1}, Communication);
_.visit = function visit_1(self_0, arg){
  var handler, result;
  return handler = (result = $removeStringValue(this._handlers, self_0._msgId) , castTo(result, 78)) , handler.visit(self_0, arg);
}
;
_.visit_0 = function visit_2(self_0, arg){
  var handler, result;
  return handler = (result = $removeStringValue(this._handlers, self_0._msgId) , castTo(result, 78)) , handler.visit_0(self_0, arg);
}
;
_.visit_1 = function visit_3(self_0, arg){
  var handler, result;
  return handler = (result = $removeStringValue(this._handlers, self_0._msgId) , castTo(result, 134)) , handler.visit_1(self_0, arg);
}
;
_._nextId = 1;
var Lqwirkle_app_client_Communication_2_classLit = createForClass('qwirkle.app.client', 'Communication', 162);
function Communication$lambda$0$Type(){
}

defineClass(420, $wnd.Function, {}, Communication$lambda$0$Type);
_.onInvoke = function onInvoke_2(arg0){
}
;
function Communication$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(421, $wnd.Function, {}, Communication$lambda$1$Type);
_.onInvoke_2 = function onInvoke_3(arg0){
  $lambda$1_3(this.$$outer_0, arg0);
}
;
function cancelRegistration(self_0){
  !!self_0 && $removeListener(self_0.$$outer_0, self_0.type_1, self_0.listener_2);
  return null;
}

function Communication$lambda$2$Type($$outer_0, type_1, listener_2){
  this.$$outer_0 = $$outer_0;
  this.type_1 = type_1;
  this.listener_2 = listener_2;
}

defineClass(208, 1, {}, Communication$lambda$2$Type);
var Lqwirkle_app_client_Communication$lambda$2$Type_2_classLit = createForClass('qwirkle.app.client', 'Communication/lambda$2$Type', 208);
function Position_0(x_0, y_0){
  this._x = x_0;
  this._y = y_0;
}

defineClass(21, 1, {21:1}, Position_0);
_.equals_0 = function equals_12(obj){
  var other;
  if (this === obj)
    return true;
  if (obj == null)
    return false;
  if (Lqwirkle_app_client_Position_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj))
    return false;
  other = castTo(obj, 21);
  if (this._x != other._x)
    return false;
  if (this._y != other._y)
    return false;
  return true;
}
;
_.hashCode_0 = function hashCode_14(){
  var result;
  result = 1;
  result = 31 * result + this._x;
  result = 31 * result + this._y;
  return result;
}
;
_.toString_0 = function toString_18(){
  return '(' + this._x + ', ' + this._y + ')';
}
;
_._x = 0;
_._y = 0;
var Lqwirkle_app_client_Position_2_classLit = createForClass('qwirkle.app.client', 'Position', 21);
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
      stein = $get_2(this$static._spielfeld, xMin + x_0, yMin + y_0);
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

defineClass(165, 1, {}, SpielfeldDarstellung);
_._xOffset = 0;
_._yOffset = 0;
var Lqwirkle_app_client_SpielfeldDarstellung_2_classLit = createForClass('qwirkle.app.client', 'SpielfeldDarstellung', 165);
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

function $lambda$0_5(this$static, aktion_1, evt_1){
  $start_1(new Verschiebung(this$static, aktion_1), castToNative(evt_1, $wnd.MouseEvent));
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

defineClass(60, 1, {60:1}, SteinDarstellung);
_._x = 0;
var Lqwirkle_app_client_SteinDarstellung_2_classLit = createForClass('qwirkle.app.client', 'SteinDarstellung', 60);
function SteinDarstellung$lambda$0$Type($$outer_0, aktion_1){
  this.$$outer_0 = $$outer_0;
  this.aktion_1 = aktion_1;
}

defineClass(116, 1, {}, SteinDarstellung$lambda$0$Type);
_.handleEvent = function handleEvent_25(arg0){
  $lambda$0_5(this.$$outer_0, this.aktion_1, arg0);
}
;
var Lqwirkle_app_client_SteinDarstellung$lambda$0$Type_2_classLit = createForClass('qwirkle.app.client', 'SteinDarstellung/lambda$0$Type', 116);
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

function $start_1(this$static, evt){
  ($clinit_DomGlobal() , document_0).addEventListener('mousemove', this$static._beiMausverschiebung = new Verschiebung$0methodref$beiMausverschiebung$Type(this$static));
  document_0.addEventListener('mouseup', this$static._beiKnopfLoslassen = new Verschiebung$1methodref$beiKnopfLoslassen$Type(this$static));
  this$static._offsetX = evt.clientX;
  this$static._offsetY = evt.clientY;
}

function Verschiebung(darstellung, aktion){
  this._darstellung = darstellung;
  this._aktion = aktion;
}

defineClass(338, 1, {}, Verschiebung);
_._offsetX = 0;
_._offsetY = 0;
var Lqwirkle_app_client_Verschiebung_2_classLit = createForClass('qwirkle.app.client', 'Verschiebung', 338);
function Verschiebung$0methodref$beiMausverschiebung$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(339, 1, {}, Verschiebung$0methodref$beiMausverschiebung$Type);
_.handleEvent = function handleEvent_26(arg0){
  $beiMausverschiebung(this.$$outer_0, arg0);
}
;
var Lqwirkle_app_client_Verschiebung$0methodref$beiMausverschiebung$Type_2_classLit = createForClass('qwirkle.app.client', 'Verschiebung/0methodref$beiMausverschiebung$Type', 339);
function Verschiebung$1methodref$beiKnopfLoslassen$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(340, 1, {}, Verschiebung$1methodref$beiKnopfLoslassen$Type);
_.handleEvent = function handleEvent_27(arg0){
  $beiKnopfLoslassen(this.$$outer_0, arg0);
}
;
var Lqwirkle_app_client_Verschiebung$1methodref$beiKnopfLoslassen$Type_2_classLit = createForClass('qwirkle.app.client', 'Verschiebung/1methodref$beiKnopfLoslassen$Type', 340);
function $entferneStein(this$static, stein){
  $remove_3(this$static._steine, stein);
}

function $fülleAuf(this$static){
  var cnt, darstellung, n, x_0;
  $sort(this$static._steine, new Vorrat$lambda$0$Type);
  x_0 = 0;
  for (n = 0 , cnt = this$static._steine.array.length; n < cnt; n++) {
    $positioniere(castTo($get_0(this$static._steine, n), 60), x_0, 0);
    x_0 += 100;
  }
  while (this$static._steine.array.length < 6 && this$static._stapel._steine.array.length != 0) {
    darstellung = new SteinDarstellung(this$static._svg, $nimmStein(this$static._stapel));
    $add_0(this$static._steine, darstellung);
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
    stein = castTo($next_0(stein$iterator), 60);
    stein._bild.addEventListener('mousedown', stein._beiKnopfdruck = new SteinDarstellung$lambda$0$Type(stein, zug));
  }
}

function Vorrat(svg, stapel){
  this._steine = new ArrayList;
  this._svg = svg;
  this._stapel = stapel;
}

function lambda$0_3(s1_0, s2_1){
  return compare_2(s1_0._x, s2_1._x);
}

defineClass(166, 1, {}, Vorrat);
var Lqwirkle_app_client_Vorrat_2_classLit = createForClass('qwirkle.app.client', 'Vorrat', 166);
function $beiKnopfLosLassen(this$static, left, top_0, steinDarstellung){
  var dx, dy, entry, gesetzterStein, istZeile, linie, nachbar, nachbar$iterator, opX, opY, operation, operation$iterator, operationen, outerIter, outerIter0, outerIter1, outerIter2, position, reihe, spielfeld, stein, teilZug, testPosition, testX, testY, vorratsStein, x_0, y_0, zugBereich, zugErlaubt, zugPosition, zugPosition$iterator, zugPosition$iterator0;
  position = $berechneSpielfeldPosition(this$static._anzeige, round_int(left), round_int(top_0));
  x_0 = position._x;
  y_0 = position._y;
  teilZug = castTo($remove(this$static._teilZüge, steinDarstellung), 71);
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
        operation = (entry = $next(operation$iterator.val$outerIter2) , castTo(entry.getValue(), 71));
        opX = operation._position._x;
        opY = operation._position._y;
        (linie._y1 == linie._y2 && opY == linie._y1 || linie._x1 == linie._x2 && opX == linie._x1) && $add_8(linie, operation._position);
      }
      reihe = new Bereich(x_0, y_0);
      istZeile = linie._y1 == linie._y2;
      baueReihe: for (zugPosition$iterator0 = (outerIter1 = (new AbstractMap$1(linie._positionen.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter1)); zugPosition$iterator0.val$outerIter2.hasNext_0();) {
        zugPosition = (entry = castTo(zugPosition$iterator0.val$outerIter2.next_1(), 23) , castTo(entry.getKey(), 21));
        if (istZeile) {
          dx = zugPosition._x > x_0?-1:1;
          for (testX = zugPosition._x; testX != x_0; testX += dx) {
            testPosition = new Position_0(testX, y_0);
            if (!$contains_0(linie._positionen, testPosition) && !$get_2(spielfeld, testPosition._x, testPosition._y)) {
              continue baueReihe;
            }
          }
        }
         else {
          dy = zugPosition._y > y_0?-1:1;
          for (testY = zugPosition._y; testY != y_0; testY += dy) {
            testPosition = new Position_0(x_0, testY);
            if (!$contains_0(linie._positionen, testPosition) && !$get_2(spielfeld, testPosition._x, testPosition._y)) {
              continue baueReihe;
            }
          }
        }
        $add_8(reihe, zugPosition);
      }
      for (zugPosition$iterator = (outerIter2 = (new AbstractMap$1(reihe._positionen.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter2)); zugPosition$iterator.val$outerIter2.hasNext_0();) {
        zugPosition = (entry = castTo(zugPosition$iterator.val$outerIter2.next_1(), 23) , castTo(entry.getKey(), 21));
        for (nachbar$iterator = new AbstractList$IteratorImpl(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_client_Position_2_classLit, 1), $intern_0, 21, 0, [new Position_0(zugPosition._x, zugPosition._y - 1), new Position_0(zugPosition._x, zugPosition._y + 1), new Position_0(zugPosition._x - 1, zugPosition._y), new Position_0(zugPosition._x + 1, zugPosition._y)]))); nachbar$iterator.i < nachbar$iterator.this$01_0.size_1();) {
          nachbar = (checkCriticalElement(nachbar$iterator.i < nachbar$iterator.this$01_0.size_1()) , castTo(nachbar$iterator.this$01_0.get_1(nachbar$iterator.last = nachbar$iterator.i++), 21));
          if ($contains_0(zugBereich._positionen, nachbar)) {
            continue;
          }
          if ($get_2(spielfeld, nachbar._x, nachbar._y)) {
            zugErlaubt = true;
            break;
          }
        }
      }
      if (zugErlaubt) {
        for (operationen = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static._teilZüge)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); operationen.val$outerIter2.hasNext;) {
          operation = (entry = $next(operationen.val$outerIter2) , castTo(entry.getValue(), 71));
          if (!$enthält(reihe, operation._position)) {
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
      if (!$get_2(spielfeld, testX, testY)) {
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
    operation = (entry = $next(operation$iterator.val$outerIter2) , castTo(entry.getValue(), 71));
    $add_8(bereich, operation._position);
  }
  return bereich;
}

function Vorrat$Zug(this$0, anzeige){
  this.this$01 = this$0;
  this._teilZüge = new HashMap;
  this._anzeige = anzeige;
}

defineClass(259, 1, {}, Vorrat$Zug);
var Lqwirkle_app_client_Vorrat$Zug_2_classLit = createForClass('qwirkle.app.client', 'Vorrat/Zug', 259);
function Vorrat$Zug$AnlegeOperation(this$1, vorratsStein, x_0, y_0, gesetzterStein){
  this.this$11 = this$1;
  this._vorratsStein = vorratsStein;
  this._position = new Position_0(x_0, y_0);
  this._gesetzterStein = gesetzterStein;
}

defineClass(71, 1, {71:1}, Vorrat$Zug$AnlegeOperation);
var Lqwirkle_app_client_Vorrat$Zug$AnlegeOperation_2_classLit = createForClass('qwirkle.app.client', 'Vorrat/Zug/AnlegeOperation', 71);
function Vorrat$lambda$0$Type(){
}

defineClass(260, 1, {}, Vorrat$lambda$0$Type);
_.compare = function compare_5(arg0, arg1){
  return lambda$0_3(castTo(arg0, 60), castTo(arg1, 60));
}
;
_.equals_0 = function equals_13(other){
  return this === other;
}
;
var Lqwirkle_app_client_Vorrat$lambda$0$Type_2_classLit = createForClass('qwirkle.app.client', 'Vorrat/lambda$0$Type', 260);
function $gameCreatedReceived(this$static, message){
  $addItem(this$static._gameList, message._game);
}

function $openGamesReceived(this$static, message){
  $setItems(this$static._gameList, message._games);
}

function JoinGameForm(communication){
  var message;
  Card.call(this);
  this._communication = communication;
  this.title_0.textContent = 'Alle offenen Spiele';
  this.description.textContent = 'Such dir ein Spiel aus, bei dem Du beitreten m\xF6chtest.';
  $appendChild_1(this, this._gameList = new ListGroup);
  $setItemRenderer(this._gameList, new JoinGameForm$lambda$0$Type);
  message = new FindOpenGames;
  $initMessageId(this._communication, message);
  $send(this._communication, message);
  $addListener(this._communication, Lqwirkle_common_messages_OpenGames_2_classLit, new JoinGameForm$0methodref$openGamesReceived$Type(this));
  $addListener(this._communication, Lqwirkle_common_messages_GameCreated_2_classLit, new JoinGameForm$1methodref$gameCreatedReceived$Type(this));
}

defineClass(172, 30, {30:1}, JoinGameForm);
var Lqwirkle_app_client_views_JoinGameForm_2_classLit = createForClass('qwirkle.app.client.views', 'JoinGameForm', 172);
function JoinGameForm$0methodref$openGamesReceived$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(304, 1, $intern_22, JoinGameForm$0methodref$openGamesReceived$Type);
_.accept = function accept_37(arg0){
  $openGamesReceived(this.$$outer_0, castTo(arg0, 112));
}
;
var Lqwirkle_app_client_views_JoinGameForm$0methodref$openGamesReceived$Type_2_classLit = createForClass('qwirkle.app.client.views', 'JoinGameForm/0methodref$openGamesReceived$Type', 304);
function JoinGameForm$1methodref$gameCreatedReceived$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(305, 1, $intern_22, JoinGameForm$1methodref$gameCreatedReceived$Type);
_.accept = function accept_38(arg0){
  $gameCreatedReceived(this.$$outer_0, castTo(arg0, 115));
}
;
var Lqwirkle_app_client_views_JoinGameForm$1methodref$gameCreatedReceived$Type_2_classLit = createForClass('qwirkle.app.client.views', 'JoinGameForm/1methodref$gameCreatedReceived$Type', 305);
function JoinGameForm$lambda$0$Type(){
}

defineClass(303, 1, {}, JoinGameForm$lambda$0$Type);
_.onRender = function onRender_0(arg0, arg1){
  $appendChild_0(arg1, $appendChild_2($appendChild_2(new FlexLayout, castTo($appendChild(castTo($styler(new FlexItem, new JoinGameForm$lambda$1$Type), 10), of_1('' + castTo(arg1.value_0, 52)._users.array.length)), 10)), castTo($appendChild(castTo($styler(castTo($css($setFlexGrow(new FlexItem), 'padding-5'), 10), new JoinGameForm$lambda$2$Type), 10), of_1(castTo(arg1.value_0, 52)._name)), 10)));
}
;
var Lqwirkle_app_client_views_JoinGameForm$lambda$0$Type_2_classLit = createForClass('qwirkle.app.client.views', 'JoinGameForm/lambda$0$Type', 303);
function JoinGameForm$lambda$1$Type(){
}

defineClass(301, 1, {}, JoinGameForm$lambda$1$Type);
_.applyStyles = function applyStyles_2(arg0){
  $setLineHeight($setBackgroundColor((arg0.element.style.setProperty('width', '20px') , arg0)));
}
;
var Lqwirkle_app_client_views_JoinGameForm$lambda$1$Type_2_classLit = createForClass('qwirkle.app.client.views', 'JoinGameForm/lambda$1$Type', 301);
function JoinGameForm$lambda$2$Type(){
}

defineClass(302, 1, {}, JoinGameForm$lambda$2$Type);
_.applyStyles = function applyStyles_3(arg0){
  arg0.element.style.setProperty('line-height', '62px');
}
;
var Lqwirkle_app_client_views_JoinGameForm$lambda$2$Type_2_classLit = createForClass('qwirkle.app.client.views', 'JoinGameForm/lambda$2$Type', 302);
function $okClicked(this$static){
  var result, result$iterator, value_0;
  for (result$iterator = new AbstractList$IteratorImpl(new Collections$SingletonList($validate(this$static._userName.elementValidations))); result$iterator.i < result$iterator.this$01_0.size_1();) {
    result = (checkCriticalElement(result$iterator.i < result$iterator.this$01_0.size_1()) , castTo(result$iterator.this$01_0.get_1(result$iterator.last = result$iterator.i++), 41));
    if (!result.valid) {
      $show_2(($clinit_Notification() , create_3('Deine Eingaben sind noch nicht ganz korrekt, bitte pr\xFCf sie nochmal.', 'alert-warning')));
      return;
    }
  }
  this$static._loader = $start($setLoadingText_0(new Loader(castToNative(this$static.root_0.wrappedElement, $wnd.HTMLDivElement)), 'Einen Moment bitte, du wirst angemeldet...'));
  value_0 = $getValue_0(this$static._userName);
  $sendRequest(this$static._communication, $setName_1(new Login, value_0), this$static);
}

function $setContinuation(this$static, okClicked){
  this$static._okClicked = okClicked;
  return this$static;
}

function $stopLoader(this$static){
  if (this$static._loader) {
    $stop_0(this$static._loader);
    this$static._loader = null;
  }
}

function LoginForm(communication){
  Card.call(this);
  this._okClicked = new LoginForm$lambda$1$Type;
  this._communication = communication;
  this.title_0.textContent = 'Nutzerdaten eingeben';
  this.description.textContent = 'Gib dir einen Namen ein, unter dem dich andere Mitspieler sehen und finden k\xF6nnen.';
  $appendChild_1(this, this._userName = $setAutoValidation($setRequired($setPlaceholder($setLabel(new TextBox, 'Nutzername'), 'Dein Name'))));
  $appendChild_1(this, $addClickListener(new Button('Ok, los!', ($clinit_StyleType() , PRIMARY)), new LoginForm$0methodref$okClicked$Type(this)));
}

defineClass(173, 30, {30:1, 134:1}, LoginForm);
_.visit_1 = function visit_4(self_0, arg){
  return $stopLoader(this) , $show_2(($clinit_Notification() , create_3('Willkommen ' + self_0._user._name + '! Es kann los gehen...', 'alert-success'))) , this._okClicked.accept(self_0._user) , null;
}
;
var Lqwirkle_app_client_views_LoginForm_2_classLit = createForClass('qwirkle.app.client.views', 'LoginForm', 173);
function LoginForm$0methodref$okClicked$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(258, 1, {}, LoginForm$0methodref$okClicked$Type);
_.handleEvent = function handleEvent_28(arg0){
  $okClicked(this.$$outer_0);
}
;
var Lqwirkle_app_client_views_LoginForm$0methodref$okClicked$Type_2_classLit = createForClass('qwirkle.app.client.views', 'LoginForm/0methodref$okClicked$Type', 258);
function LoginForm$lambda$1$Type(){
}

defineClass(257, 1, $intern_22, LoginForm$lambda$1$Type);
_.accept = function accept_39(arg0){
  castTo(arg0, 45);
}
;
var Lqwirkle_app_client_views_LoginForm$lambda$1$Type_2_classLit = createForClass('qwirkle.app.client.views', 'LoginForm/lambda$1$Type', 257);
function $gameStartedReceived(this$static, message){
  if (this$static._loader) {
    $stop_0(this$static._loader);
    this$static._loader = null;
  }
  this$static._onJoin = cancelRegistration(this$static._onJoin);
  this$static._onJoin = cancelRegistration(this$static._onLeave);
  this$static._onJoin = cancelRegistration(this$static._onStart);
  $accept_0(this$static._continuation, message._game);
}

function $lambda$8_1(this$static, item_0){
  return $removeItem(this$static._userList, item_0, false);
}

function $startGameClicked_0(this$static){
  this$static._loader = $start($setLoadingText_0(new Loader(castToNative(this$static.root_0.wrappedElement, $wnd.HTMLDivElement)), 'Starte das Spiel, einen Moment bitte...'));
  $send(this$static._communication, $setGameId_1(new StartGame, this$static._game._gameId));
}

function $userJoinedReceived(this$static, message){
  if (!$equals_0(this$static._game._gameId, message._gameId)) {
    return;
  }
  $addItem(this$static._userList, message._user);
  $setDisabled(this$static._startButton, this$static._userList.items.array.length > 2);
}

function $userLeftReceived(this$static, message){
  var lastArg, lastArg0;
  if (!$equals_0(this$static._game._gameId, message._gameId)) {
    return;
  }
  $forEach_2(castTo($reduce((lastArg0 = $filter(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static._userList.items, 16)), new StartGameForm$lambda$7$Type(message)) , of(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 51, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)])) , lastArg0), (lastArg = new ArrayList , lastArg)), 43).stream(), new StartGameForm$lambda$8$Type(this$static));
  $setDisabled(this$static._startButton, this$static._userList.items.array.length > 2);
}

function StartGameForm(communication, userInfo, continuation){
  Card.call(this);
  this._communication = communication;
  this._userInfo = userInfo;
  this._continuation = continuation;
  this.title_0.textContent = 'Warte auf Mitspieler';
  $appendChild_1(this, this._gameId = $setReadOnly_0(castTo($setTooltip_0($setPlaceholder($setLabel(new TextBox, 'Spielenummer'), 'Noch nicht zugewiesen'), 'Schick diese Nummer deinen Freunden, damit sie Dein Spiel schnell finden k\xF6nnen.', ($clinit_PopupPosition() , TOP_0)), 89), true));
  $appendChild_1(this, this._userList = new ListGroup);
  $setItemRenderer(this._userList, new StartGameForm$lambda$0$Type);
  $addItem(this._userList, this._userInfo);
  $appendChild_1(this, this._startButton = castTo($addClickListener(new Button('Spiel beginnen', ($clinit_StyleType() , DEFAULT_0)), new StartGameForm$0methodref$startGameClicked$Type(this)), 72));
  $setDisabled(this._startButton, this._userList.items.array.length > 2);
  this._onJoin = $addListener(this._communication, Lqwirkle_common_messages_UserJoined_2_classLit, new StartGameForm$1methodref$userJoinedReceived$Type(this));
  this._onLeave = $addListener(this._communication, Lqwirkle_common_messages_UserLeft_2_classLit, new StartGameForm$2methodref$userLeftReceived$Type(this));
  this._onStart = $addListener(this._communication, Lqwirkle_common_messages_GameStarted_2_classLit, new StartGameForm$3methodref$gameStartedReceived$Type(this));
  $sendRequest(this._communication, $setName(new CreateGame, this._userInfo._name), this);
}

function lambda$7(message_0, item_1){
  return $equals_0(castTo(item_1.value_0, 45)._userId, message_0._userId);
}

defineClass(169, 30, {30:1, 78:1}, StartGameForm);
_.visit = function visit_5(self_0, arg){
  return null;
}
;
_.visit_0 = function visit_6(self_0, arg){
  return this._game = self_0._game , $value_0(this._gameId, self_0._game._gameId) , null;
}
;
var Lqwirkle_app_client_views_StartGameForm_2_classLit = createForClass('qwirkle.app.client.views', 'StartGameForm', 169);
function StartGameForm$0methodref$startGameClicked$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(270, 1, {}, StartGameForm$0methodref$startGameClicked$Type);
_.handleEvent = function handleEvent_29(arg0){
  $startGameClicked_0(this.$$outer_0);
}
;
var Lqwirkle_app_client_views_StartGameForm$0methodref$startGameClicked$Type_2_classLit = createForClass('qwirkle.app.client.views', 'StartGameForm/0methodref$startGameClicked$Type', 270);
function StartGameForm$1methodref$userJoinedReceived$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(271, 1, $intern_22, StartGameForm$1methodref$userJoinedReceived$Type);
_.accept = function accept_40(arg0){
  $userJoinedReceived(this.$$outer_0, castTo(arg0, 113));
}
;
var Lqwirkle_app_client_views_StartGameForm$1methodref$userJoinedReceived$Type_2_classLit = createForClass('qwirkle.app.client.views', 'StartGameForm/1methodref$userJoinedReceived$Type', 271);
function StartGameForm$2methodref$userLeftReceived$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(272, 1, $intern_22, StartGameForm$2methodref$userLeftReceived$Type);
_.accept = function accept_41(arg0){
  $userLeftReceived(this.$$outer_0, castTo(arg0, 114));
}
;
var Lqwirkle_app_client_views_StartGameForm$2methodref$userLeftReceived$Type_2_classLit = createForClass('qwirkle.app.client.views', 'StartGameForm/2methodref$userLeftReceived$Type', 272);
function StartGameForm$3methodref$gameStartedReceived$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(273, 1, $intern_22, StartGameForm$3methodref$gameStartedReceived$Type);
_.accept = function accept_42(arg0){
  $gameStartedReceived(this.$$outer_0, castTo(arg0, 111));
}
;
var Lqwirkle_app_client_views_StartGameForm$3methodref$gameStartedReceived$Type_2_classLit = createForClass('qwirkle.app.client.views', 'StartGameForm/3methodref$gameStartedReceived$Type', 273);
function StartGameForm$lambda$0$Type(){
}

defineClass(269, 1, {}, StartGameForm$lambda$0$Type);
_.onRender = function onRender_1(arg0, arg1){
  $appendChild_0((arg1.selectable = false , $remove_9(arg1.style_0, 'd-selectable') , arg1), $appendChild_2($appendChild_2(new FlexLayout, castTo($styler(new FlexItem, new StartGameForm$lambda$1$Type), 10)), castTo($setTooltip_0(castTo($appendChild(castTo($styler(castTo($css($setFlexGrow(new FlexItem), 'padding-5'), 10), new StartGameForm$lambda$2$Type), 10), of_1(castTo(arg1.value_0, 45)._name)), 10), 'User ID: ' + castTo(arg1.value_0, 45)._userId, ($clinit_PopupPosition() , TOP_0)), 10)));
}
;
var Lqwirkle_app_client_views_StartGameForm$lambda$0$Type_2_classLit = createForClass('qwirkle.app.client.views', 'StartGameForm/lambda$0$Type', 269);
function StartGameForm$lambda$1$Type(){
}

defineClass(267, 1, {}, StartGameForm$lambda$1$Type);
_.applyStyles = function applyStyles_4(arg0){
  $setBackgroundColor((arg0.element.style.setProperty('width', '20px') , arg0));
}
;
var Lqwirkle_app_client_views_StartGameForm$lambda$1$Type_2_classLit = createForClass('qwirkle.app.client.views', 'StartGameForm/lambda$1$Type', 267);
function StartGameForm$lambda$2$Type(){
}

defineClass(268, 1, {}, StartGameForm$lambda$2$Type);
_.applyStyles = function applyStyles_5(arg0){
  arg0.element.style.setProperty('line-height', '62px');
}
;
var Lqwirkle_app_client_views_StartGameForm$lambda$2$Type_2_classLit = createForClass('qwirkle.app.client.views', 'StartGameForm/lambda$2$Type', 268);
function $test(this$static, arg0){
  return lambda$7(this$static.message_0, castTo(arg0, 74));
}

function StartGameForm$lambda$7$Type(message_0){
  this.message_0 = message_0;
}

defineClass(274, 1, {}, StartGameForm$lambda$7$Type);
var Lqwirkle_app_client_views_StartGameForm$lambda$7$Type_2_classLit = createForClass('qwirkle.app.client.views', 'StartGameForm/lambda$7$Type', 274);
function StartGameForm$lambda$8$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(275, 1, $intern_22, StartGameForm$lambda$8$Type);
_.accept = function accept_43(arg0){
  $lambda$8_1(this.$$outer_0, castTo(arg0, 74));
}
;
var Lqwirkle_app_client_views_StartGameForm$lambda$8$Type_2_classLit = createForClass('qwirkle.app.client.views', 'StartGameForm/lambda$8$Type', 275);
function $nimmStein(this$static){
  return castTo($remove_2(this$static._steine, this$static._steine.array.length - 1), 44);
}

function Nachzugstapel(){
  var farbNummer, farben, formNummer, formen, n;
  this._steine = new ArrayList;
  for (n = 0; n < 3; n++) {
    for (farbNummer = 0 , farben = ($clinit_Qwirkle$Farbe() , stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_shared_Qwirkle$Farbe_2_classLit, 1), $intern_1, 36, 0, [yellow, orange, red, blue, green, magenta])).length; farbNummer < farben; farbNummer++) {
      for (formNummer = 0 , formen = ($clinit_Qwirkle$Form() , stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_shared_Qwirkle$Form_2_classLit, 1), $intern_1, 37, 0, [circle, square, star, pounce, cross, diamond])).length; formNummer < formen; formNummer++) {
        $add_0(this._steine, new Qwirkle$Stein(stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_shared_Qwirkle$Farbe_2_classLit, 1), $intern_1, 36, 0, [yellow, orange, red, blue, green, magenta])[farbNummer], stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_shared_Qwirkle$Form_2_classLit, 1), $intern_1, 37, 0, [circle, square, star, pounce, cross, diamond])[formNummer]));
      }
    }
  }
  shuffle(this._steine, ($clinit_Collections$RandomHolder() , rnd_0));
}

defineClass(163, 1, {}, Nachzugstapel);
var Lqwirkle_app_shared_Nachzugstapel_2_classLit = createForClass('qwirkle.app.shared', 'Nachzugstapel', 163);
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

function values_16(){
  $clinit_Qwirkle$Farbe();
  return stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_shared_Qwirkle$Farbe_2_classLit, 1), $intern_1, 36, 0, [yellow, orange, red, blue, green, magenta]);
}

defineClass(36, 13, {3:1, 20:1, 13:1, 36:1}, Qwirkle$Farbe);
var blue, green, magenta, orange, red, yellow;
var Lqwirkle_app_shared_Qwirkle$Farbe_2_classLit = createForEnum('qwirkle.app.shared', 'Qwirkle/Farbe', 36, values_16);
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

function values_17(){
  $clinit_Qwirkle$Form();
  return stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_shared_Qwirkle$Form_2_classLit, 1), $intern_1, 37, 0, [circle, square, star, pounce, cross, diamond]);
}

defineClass(37, 13, {3:1, 20:1, 13:1, 37:1}, Qwirkle$Form);
var circle, cross, diamond, pounce, square, star;
var Lqwirkle_app_shared_Qwirkle$Form_2_classLit = createForEnum('qwirkle.app.shared', 'Qwirkle/Form', 37, values_17);
function Qwirkle$Stein(farbe, form_0){
  this.farbe = farbe;
  this.form_0 = form_0;
}

defineClass(44, 1, {44:1}, Qwirkle$Stein);
var Lqwirkle_app_shared_Qwirkle$Stein_2_classLit = createForClass('qwirkle.app.shared', 'Qwirkle/Stein', 44);
function $get_2(this$static, x_0, y_0){
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
  farben = (all0 = castTo($getEnumConstants(Lqwirkle_app_shared_Qwirkle$Farbe_2_classLit), 11) , new EnumSet$EnumSetImpl(all0, castTo(createFrom(all0, all0.length), 11)));
  formen = (all = castTo($getEnumConstants(Lqwirkle_app_shared_Qwirkle$Form_2_classLit), 11) , new EnumSet$EnumSetImpl(all, castTo(createFrom(all, all.length), 11)));
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
    feld = $get_2(this$static, xPos, yPos);
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
    feld = $get_2(this$static, xPos, yPos);
    if (!feld) {
      return steine;
    }
    ++steine;
    $add_1(farben, feld.farbe);
    $add_1(formen, feld.form_0);
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
    dataNew = initUnidimensionalArray(Lqwirkle_app_shared_Qwirkle$Stein_2_classLit, $intern_0, 44, widthNew * heightNew, 0, 1);
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
  if ($get_2(this$static, x_0, y_0)) {
    return false;
  }
  if (!(!!$get_2(this$static, x_0 - 1, y_0) || !!$get_2(this$static, x_0 + 1, y_0) || !!$get_2(this$static, x_0, y_0 - 1) || !!$get_2(this$static, x_0, y_0 + 1))) {
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
  this._data = initUnidimensionalArray(Lqwirkle_app_shared_Qwirkle$Stein_2_classLit, $intern_0, 44, 1, 0, 1);
}

defineClass(164, 1, {}, Spielfeld);
_._height = 1;
_._width = 1;
_._xMin = 0;
_._yMin = 0;
var Lqwirkle_app_shared_Spielfeld_2_classLit = createForClass('qwirkle.app.shared', 'Spielfeld', 164);
function $writeTo(this$static, out){
  $writeDeferredName(out);
  $open(out, 1, '[');
  $value(out, this$static.jsonType());
  $writeContent(this$static, out);
  $close(out, 1, 2, ']');
}

defineClass(400, 382, {});
_.writeTo = function writeTo(out){
  $writeTo(this, out);
}
;
var Lqwirkle_common_messages_ClientMessage_2_classLit = createForClass('qwirkle.common.messages', 'ClientMessage', 400);
function $readField(this$static, in_0, field){
  switch (field) {
    case 'msgId':
      $setMsgId(this$static, $nextString(in_0));
      break;
    default:$skipValue(in_0);
  }
}

function $setMsgId(this$static, value_0){
  this$static._msgId = value_0;
  return this$static;
}

defineClass(117, 400, {});
_.jsonType = function jsonType(){
  return 'Request';
}
;
_.readField = function readField_0(in_0, field){
  $readField(this, in_0, field);
}
;
_.writeFields = function writeFields_0(out){
  $name_0(out, 'msgId');
  $value(out, this._msgId);
}
;
_._msgId = '';
var Lqwirkle_common_messages_Request_2_classLit = createForClass('qwirkle.common.messages', 'Request', 117);
function $setName(this$static, value_0){
  this$static._name = value_0;
  return this$static;
}

function CreateGame(){
}

defineClass(318, 117, {}, CreateGame);
_.jsonType = function jsonType_0(){
  return 'CreateGame';
}
;
_.readField = function readField_1(in_0, field){
  switch (field) {
    case 'name':
      $setName(this, $nextString(in_0));
      break;
    default:$readField(this, in_0, field);
  }
}
;
_.writeFields = function writeFields_1(out){
  $name_0(out, 'msgId');
  $value(out, this._msgId);
  $name_0(out, 'name');
  $value(out, this._name);
}
;
_._name = '';
var Lqwirkle_common_messages_CreateGame_2_classLit = createForClass('qwirkle.common.messages', 'CreateGame', 318);
function readServerMessage(in_0){
  var result, type_0, result_0, result_1, result_2, result_3, result_4, result_5, result_6, result_7, result_8, result_9, result_10;
  $beginArray(in_0);
  type_0 = $nextString(in_0);
  switch (type_0) {
    case 'GameOpened':
      result = (result_0 = new GameOpened , $beginObject(in_0) , $readFields(result_0, in_0) , $endObject(in_0) , result_0);
      break;
    case 'GameClosed':
      result = (result_1 = new GameClosed , $beginObject(in_0) , $readFields(result_1, in_0) , $endObject(in_0) , result_1);
      break;
    case 'GameStarted':
      result = (result_2 = new GameStarted , $beginObject(in_0) , $readFields(result_2, in_0) , $endObject(in_0) , result_2);
      break;
    case 'ServerError':
      result = (result_3 = new ServerError , $beginObject(in_0) , $readFields(result_3, in_0) , $endObject(in_0) , result_3);
      break;
    case 'OpenGames':
      result = (result_4 = new OpenGames , $beginObject(in_0) , $readFields(result_4, in_0) , $endObject(in_0) , result_4);
      break;
    case 'UserJoined':
      result = (result_5 = new UserJoined , $beginObject(in_0) , $readFields(result_5, in_0) , $endObject(in_0) , result_5);
      break;
    case 'UserLeft':
      result = (result_6 = new UserLeft , $beginObject(in_0) , $readFields(result_6, in_0) , $endObject(in_0) , result_6);
      break;
    case 'GameCreated':
      result = (result_7 = new GameCreated , $beginObject(in_0) , $readFields(result_7, in_0) , $endObject(in_0) , result_7);
      break;
    case 'CreateGameFailed':
      result = (result_8 = new CreateGameFailed , $beginObject(in_0) , $readFields(result_8, in_0) , $endObject(in_0) , result_8);
      break;
    case 'LoginSuccess':
      result = (result_9 = new LoginSuccess , $beginObject(in_0) , $readFields(result_9, in_0) , $endObject(in_0) , result_9);
      break;
    case 'LoginFailed':
      result = (result_10 = new LoginFailed , $beginObject(in_0) , $readFields(result_10, in_0) , $endObject(in_0) , result_10);
      break;
    default:$skipValue(in_0);
      result = null;
  }
  $endArray(in_0);
  return result;
}

defineClass(381, 382, {});
_.writeTo = function writeTo_0(out){
  $writeDeferredName(out);
  $open(out, 1, '[');
  $value(out, this.jsonType());
  $writeContent(this, out);
  $close(out, 1, 2, ']');
}
;
var Lqwirkle_common_messages_ServerMessage_2_classLit = createForClass('qwirkle.common.messages', 'ServerMessage', 381);
function $readField_0(this$static, in_0, field){
  switch (field) {
    case 'msgId':
      $setMsgId_0(this$static, $nextString(in_0));
      break;
    default:$skipValue(in_0);
  }
}

function $setMsgId_0(this$static, value_0){
  this$static._msgId = value_0;
  return this$static;
}

function Response_0(){
}

defineClass(95, 381, {});
_.jsonType = function jsonType_1(){
  return 'Response';
}
;
_.readField = function readField_2(in_0, field){
  $readField_0(this, in_0, field);
}
;
_.visit_2 = function visit_7(v, arg){
  return this.visit_3(v, arg);
}
;
_.writeFields = function writeFields_2(out){
  $name_0(out, 'msgId');
  $value(out, this._msgId);
}
;
_._msgId = '';
var Lqwirkle_common_messages_Response_2_classLit = createForClass('qwirkle.common.messages', 'Response', 95);
function CreateGameResponse(){
  Response_0.call(this);
}

defineClass(129, 95, {});
_.jsonType = function jsonType_2(){
  return 'CreateGameResponse';
}
;
_.visit_3 = function visit_8(v, arg){
  return this.visit_4(v, arg);
}
;
var Lqwirkle_common_messages_CreateGameResponse_2_classLit = createForClass('qwirkle.common.messages', 'CreateGameResponse', 129);
function $setMessage(this$static, value_0){
  this$static._message = value_0;
  return this$static;
}

function CreateGameFailed(){
  CreateGameResponse.call(this);
}

defineClass(264, 129, {}, CreateGameFailed);
_.jsonType = function jsonType_3(){
  return 'CreateGameFailed';
}
;
_.readField = function readField_3(in_0, field){
  switch (field) {
    case 'message':
      $setMessage(this, $nextString(in_0));
      break;
    default:$readField_0(this, in_0, field);
  }
}
;
_.visit_4 = function visit_9(v, arg){
  var handler, result;
  return handler = (result = $removeStringValue(v._handlers, this._msgId) , castTo(result, 78)) , handler.visit(this, arg);
}
;
_.writeFields = function writeFields_3(out){
  $name_0(out, 'msgId');
  $value(out, this._msgId);
  $name_0(out, 'message');
  $value(out, this._message);
}
;
_._message = '';
var Lqwirkle_common_messages_CreateGameFailed_2_classLit = createForClass('qwirkle.common.messages', 'CreateGameFailed', 264);
function FindOpenGames(){
}

defineClass(321, 117, {}, FindOpenGames);
_.jsonType = function jsonType_4(){
  return 'FindOpenGames';
}
;
var Lqwirkle_common_messages_FindOpenGames_2_classLit = createForClass('qwirkle.common.messages', 'FindOpenGames', 321);
function $setGameId(this$static, value_0){
  this$static._gameId = value_0;
  return this$static;
}

function GameClosed(){
}

defineClass(262, 381, {}, GameClosed);
_.jsonType = function jsonType_5(){
  return 'GameClosed';
}
;
_.readField = function readField_4(in_0, field){
  switch (field) {
    case 'gameId':
      $setGameId(this, $nextString(in_0));
      break;
    default:$skipValue(in_0);
  }
}
;
_.visit_2 = function visit_10(v, arg){
  return $handle(v, this);
}
;
_.writeFields = function writeFields_4(out){
  $name_0(out, 'gameId');
  $value(out, this._gameId);
}
;
_._gameId = '';
var Lqwirkle_common_messages_GameClosed_2_classLit = createForClass('qwirkle.common.messages', 'GameClosed', 262);
function $setGame(this$static, value_0){
  this$static._game = value_0;
  return this$static;
}

function GameCreated(){
  CreateGameResponse.call(this);
}

defineClass(115, 129, {115:1}, GameCreated);
_.jsonType = function jsonType_6(){
  return 'GameCreated';
}
;
_.readField = function readField_5(in_0, field){
  switch (field) {
    case 'game':
      $setGame(this, readGameInfo(in_0));
      break;
    default:$readField_0(this, in_0, field);
  }
}
;
_.visit_4 = function visit_11(v, arg){
  var handler, result;
  return handler = (result = $removeStringValue(v._handlers, this._msgId) , castTo(result, 78)) , handler.visit_0(this, arg);
}
;
_.writeFields = function writeFields_5(out){
  $name_0(out, 'msgId');
  $value(out, this._msgId);
  if (this._game) {
    $name_0(out, 'game');
    $writeContent(this._game, out);
  }
}
;
_._game = null;
var Lqwirkle_common_messages_GameCreated_2_classLit = createForClass('qwirkle.common.messages', 'GameCreated', 115);
function $addUser(this$static, value_0){
  $add_0(this$static._users, value_0);
  return this$static;
}

function $setGameId_0(this$static, value_0){
  this$static._gameId = value_0;
  return this$static;
}

function $setName_0(this$static, value_0){
  this$static._name = value_0;
  return this$static;
}

function GameInfo(){
  this._users = new ArrayList;
}

function readGameInfo(in_0){
  var result;
  result = new GameInfo;
  $beginObject(in_0);
  $readFields(result, in_0);
  $endObject(in_0);
  return result;
}

defineClass(52, 382, {52:1}, GameInfo);
_.readField = function readField_6(in_0, field){
  switch (field) {
    case 'gameId':
      $setGameId_0(this, $nextString(in_0));
      break;
    case 'name':
      $setName_0(this, $nextString(in_0));
      break;
    case 'users':
      {
        $beginArray(in_0);
        while ($hasNext(in_0)) {
          $addUser(this, readUserInfo(in_0));
        }
        $endArray(in_0);
      }

      break;
    default:$skipValue(in_0);
  }
}
;
_.writeFields = function writeFields_6(out){
  var x_0, x$iterator;
  $name_0(out, 'gameId');
  $value(out, this._gameId);
  $name_0(out, 'name');
  $value(out, this._name);
  $name_0(out, 'users');
  $writeDeferredName(out);
  $open(out, 1, '[');
  for (x$iterator = new ArrayList$1(this._users); x$iterator.i < x$iterator.this$01.array.length;) {
    x_0 = castTo($next_0(x$iterator), 45);
    $writeContent(x_0, out);
  }
  $close(out, 1, 2, ']');
}
;
_.writeTo = function writeTo_1(out){
  $writeContent(this, out);
}
;
_._gameId = '';
_._name = '';
var Lqwirkle_common_messages_GameInfo_2_classLit = createForClass('qwirkle.common.messages', 'GameInfo', 52);
function $setGame_0(this$static, value_0){
  this$static._game = value_0;
  return this$static;
}

function GameOpened(){
}

defineClass(261, 381, {}, GameOpened);
_.jsonType = function jsonType_7(){
  return 'GameOpened';
}
;
_.readField = function readField_7(in_0, field){
  switch (field) {
    case 'game':
      $setGame_0(this, readGameInfo(in_0));
      break;
    default:$skipValue(in_0);
  }
}
;
_.visit_2 = function visit_12(v, arg){
  return $handle(v, this);
}
;
_.writeFields = function writeFields_7(out){
  if (this._game) {
    $name_0(out, 'game');
    $writeContent(this._game, out);
  }
}
;
_._game = null;
var Lqwirkle_common_messages_GameOpened_2_classLit = createForClass('qwirkle.common.messages', 'GameOpened', 261);
function $setGame_1(this$static, value_0){
  this$static._game = value_0;
  return this$static;
}

function GameStarted(){
}

defineClass(111, 381, {111:1}, GameStarted);
_.jsonType = function jsonType_8(){
  return 'GameStarted';
}
;
_.readField = function readField_8(in_0, field){
  switch (field) {
    case 'game':
      $setGame_1(this, readGameInfo(in_0));
      break;
    default:$skipValue(in_0);
  }
}
;
_.visit_2 = function visit_13(v, arg){
  return $handle(v, this);
}
;
_.writeFields = function writeFields_8(out){
  if (this._game) {
    $name_0(out, 'game');
    $writeContent(this._game, out);
  }
}
;
_._game = null;
var Lqwirkle_common_messages_GameStarted_2_classLit = createForClass('qwirkle.common.messages', 'GameStarted', 111);
function $setName_1(this$static, value_0){
  this$static._name = value_0;
  return this$static;
}

function Login(){
}

defineClass(337, 117, {}, Login);
_.jsonType = function jsonType_9(){
  return 'Login';
}
;
_.readField = function readField_9(in_0, field){
  switch (field) {
    case 'name':
      $setName_1(this, $nextString(in_0));
      break;
    default:$readField(this, in_0, field);
  }
}
;
_.writeFields = function writeFields_9(out){
  $name_0(out, 'msgId');
  $value(out, this._msgId);
  $name_0(out, 'name');
  $value(out, this._name);
}
;
_._name = '';
var Lqwirkle_common_messages_Login_2_classLit = createForClass('qwirkle.common.messages', 'Login', 337);
function LoginResponse(){
  Response_0.call(this);
}

defineClass(133, 95, {});
_.jsonType = function jsonType_10(){
  return 'LoginResponse';
}
;
_.visit_3 = function visit_14(v, arg){
  return this.visit_5(v, arg);
}
;
var Lqwirkle_common_messages_LoginResponse_2_classLit = createForClass('qwirkle.common.messages', 'LoginResponse', 133);
function $setMessage_0(this$static, value_0){
  this$static._message = value_0;
  return this$static;
}

function LoginFailed(){
  LoginResponse.call(this);
}

defineClass(266, 133, {}, LoginFailed);
_.jsonType = function jsonType_11(){
  return 'LoginFailed';
}
;
_.readField = function readField_10(in_0, field){
  switch (field) {
    case 'message':
      $setMessage_0(this, $nextString(in_0));
      break;
    default:$readField_0(this, in_0, field);
  }
}
;
_.visit_5 = function visit_15(v, arg){
  return null;
}
;
_.writeFields = function writeFields_10(out){
  $name_0(out, 'msgId');
  $value(out, this._msgId);
  $name_0(out, 'message');
  $value(out, this._message);
}
;
_._message = '';
var Lqwirkle_common_messages_LoginFailed_2_classLit = createForClass('qwirkle.common.messages', 'LoginFailed', 266);
function $setUser(this$static, value_0){
  this$static._user = value_0;
  return this$static;
}

function LoginSuccess(){
  LoginResponse.call(this);
}

defineClass(265, 133, {}, LoginSuccess);
_.jsonType = function jsonType_12(){
  return 'LoginSuccess';
}
;
_.readField = function readField_11(in_0, field){
  switch (field) {
    case 'user':
      $setUser(this, readUserInfo(in_0));
      break;
    default:$readField_0(this, in_0, field);
  }
}
;
_.visit_5 = function visit_16(v, arg){
  var handler, result;
  return handler = (result = $removeStringValue(v._handlers, this._msgId) , castTo(result, 134)) , handler.visit_1(this, arg);
}
;
_.writeFields = function writeFields_11(out){
  $name_0(out, 'msgId');
  $value(out, this._msgId);
  if (this._user) {
    $name_0(out, 'user');
    $writeContent(this._user, out);
  }
}
;
_._user = null;
var Lqwirkle_common_messages_LoginSuccess_2_classLit = createForClass('qwirkle.common.messages', 'LoginSuccess', 265);
function $addGame(this$static, value_0){
  $add_0(this$static._games, value_0);
  return this$static;
}

function OpenGames(){
  this._games = new ArrayList;
}

defineClass(112, 95, {112:1}, OpenGames);
_.jsonType = function jsonType_13(){
  return 'OpenGames';
}
;
_.readField = function readField_12(in_0, field){
  switch (field) {
    case 'games':
      {
        $beginArray(in_0);
        while ($hasNext(in_0)) {
          $addGame(this, readGameInfo(in_0));
        }
        $endArray(in_0);
      }

      break;
    default:$readField_0(this, in_0, field);
  }
}
;
_.visit_3 = function visit_17(v, arg){
  var lastArg;
  return $handle(v, (lastArg = this , lastArg));
}
;
_.writeFields = function writeFields_12(out){
  var x_0, x$iterator;
  $name_0(out, 'msgId');
  $value(out, this._msgId);
  $name_0(out, 'games');
  $writeDeferredName(out);
  $open(out, 1, '[');
  for (x$iterator = new ArrayList$1(this._games); x$iterator.i < x$iterator.this$01.array.length;) {
    x_0 = castTo($next_0(x$iterator), 52);
    $writeContent(x_0, out);
  }
  $close(out, 1, 2, ']');
}
;
var Lqwirkle_common_messages_OpenGames_2_classLit = createForClass('qwirkle.common.messages', 'OpenGames', 112);
function $setMessage_1(this$static, value_0){
  this$static._message = value_0;
  return this$static;
}

function ServerError(){
}

defineClass(263, 95, {}, ServerError);
_.jsonType = function jsonType_14(){
  return 'ServerError';
}
;
_.readField = function readField_13(in_0, field){
  switch (field) {
    case 'message':
      $setMessage_1(this, $nextString(in_0));
      break;
    default:$readField_0(this, in_0, field);
  }
}
;
_.visit_3 = function visit_18(v, arg){
  var lastArg;
  return $handle(v, (lastArg = this , lastArg));
}
;
_.writeFields = function writeFields_13(out){
  $name_0(out, 'msgId');
  $value(out, this._msgId);
  $name_0(out, 'message');
  $value(out, this._message);
}
;
_._message = '';
var Lqwirkle_common_messages_ServerError_2_classLit = createForClass('qwirkle.common.messages', 'ServerError', 263);
function $setGameId_1(this$static, value_0){
  this$static._gameId = value_0;
  return this$static;
}

function StartGame(){
}

defineClass(362, 400, {}, StartGame);
_.jsonType = function jsonType_15(){
  return 'StartGame';
}
;
_.readField = function readField_14(in_0, field){
  switch (field) {
    case 'gameId':
      $setGameId_1(this, $nextString(in_0));
      break;
    default:$skipValue(in_0);
  }
}
;
_.writeFields = function writeFields_14(out){
  $name_0(out, 'gameId');
  $value(out, this._gameId);
}
;
_._gameId = '';
var Lqwirkle_common_messages_StartGame_2_classLit = createForClass('qwirkle.common.messages', 'StartGame', 362);
function $setName_2(this$static, value_0){
  this$static._name = value_0;
  return this$static;
}

function $setUserId(this$static, value_0){
  this$static._userId = value_0;
  return this$static;
}

function UserInfo(){
}

function readUserInfo(in_0){
  var result;
  result = new UserInfo;
  $beginObject(in_0);
  $readFields(result, in_0);
  $endObject(in_0);
  return result;
}

defineClass(45, 382, {45:1}, UserInfo);
_.readField = function readField_15(in_0, field){
  switch (field) {
    case 'userId':
      $setUserId(this, $nextString(in_0));
      break;
    case 'name':
      $setName_2(this, $nextString(in_0));
      break;
    default:$skipValue(in_0);
  }
}
;
_.writeFields = function writeFields_15(out){
  $name_0(out, 'userId');
  $value(out, this._userId);
  $name_0(out, 'name');
  $value(out, this._name);
}
;
_.writeTo = function writeTo_2(out){
  $writeContent(this, out);
}
;
_._name = '';
_._userId = '';
var Lqwirkle_common_messages_UserInfo_2_classLit = createForClass('qwirkle.common.messages', 'UserInfo', 45);
function $readField_1(this$static, in_0, field){
  switch (field) {
    case 'gameId':
      $setGameId_2(this$static, $nextString(in_0));
      break;
    default:$skipValue(in_0);
  }
}

function $setGameId_2(this$static, value_0){
  this$static._gameId = value_0;
  return this$static;
}

defineClass(132, 381, {});
_.jsonType = function jsonType_16(){
  return 'UserMessage';
}
;
_.readField = function readField_16(in_0, field){
  $readField_1(this, in_0, field);
}
;
_.visit_2 = function visit_19(v, arg){
  return this.visit_6(v, arg);
}
;
_.writeFields = function writeFields_16(out){
  $name_0(out, 'gameId');
  $value(out, this._gameId);
}
;
_._gameId = '';
var Lqwirkle_common_messages_UserMessage_2_classLit = createForClass('qwirkle.common.messages', 'UserMessage', 132);
function $setUser_0(this$static, value_0){
  this$static._user = value_0;
  return this$static;
}

function UserJoined(){
}

defineClass(113, 132, {113:1}, UserJoined);
_.jsonType = function jsonType_17(){
  return 'UserJoined';
}
;
_.readField = function readField_17(in_0, field){
  switch (field) {
    case 'user':
      $setUser_0(this, readUserInfo(in_0));
      break;
    default:$readField_1(this, in_0, field);
  }
}
;
_.visit_6 = function visit_20(v, arg){
  var lastArg;
  return $handle(v, (lastArg = this , lastArg));
}
;
_.writeFields = function writeFields_17(out){
  $name_0(out, 'gameId');
  $value(out, this._gameId);
  if (this._user) {
    $name_0(out, 'user');
    $writeContent(this._user, out);
  }
}
;
_._user = null;
var Lqwirkle_common_messages_UserJoined_2_classLit = createForClass('qwirkle.common.messages', 'UserJoined', 113);
function $setUserId_0(this$static, value_0){
  this$static._userId = value_0;
  return this$static;
}

function UserLeft(){
}

defineClass(114, 132, {114:1}, UserLeft);
_.jsonType = function jsonType_18(){
  return 'UserLeft';
}
;
_.readField = function readField_18(in_0, field){
  switch (field) {
    case 'userId':
      $setUserId_0(this, $nextString(in_0));
      break;
    default:$readField_1(this, in_0, field);
  }
}
;
_.visit_6 = function visit_21(v, arg){
  var lastArg;
  return $visit((lastArg = this , lastArg));
}
;
_.writeFields = function writeFields_18(out){
  $name_0(out, 'gameId');
  $value(out, this._gameId);
  $name_0(out, 'userId');
  $value(out, this._userId);
}
;
_._userId = '';
var Lqwirkle_common_messages_UserLeft_2_classLit = createForClass('qwirkle.common.messages', 'UserLeft', 114);
var C_classLit = createForPrimitive('char', 'C');
var D_classLit = createForPrimitive('double', 'D');
var I_classLit = createForPrimitive('int', 'I');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie9']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=qwirkle-0.js

