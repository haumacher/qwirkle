var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.qwirkle;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.9.0";
var $strongName = 'FA080D60D72B9BBC2295259A91EB386D';
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
var $intern_0 = {3:1, 6:1}, $intern_1 = {3:1, 10:1, 6:1}, $intern_2 = {3:1, 5:1, 4:1}, $intern_3 = 4194303, $intern_4 = 1048575, $intern_5 = 524288, $intern_6 = 4194304, $intern_7 = 17592186044416, $intern_8 = -17592186044416, $intern_9 = {3:1}, $intern_10 = {l:3355444, m:838860, h:996147}, $intern_11 = {24:1, 3:1, 4:1}, $intern_12 = {3:1, 27:1, 4:1}, $intern_13 = {17:1, 34:1}, $intern_14 = {20:1}, $intern_15 = {3:1, 17:1, 42:1}, $intern_16 = 15525485, $intern_17 = 5.9604644775390625E-8, $intern_18 = 16777216;
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

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
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

defineClass(60, 1, {}, Class);
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
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 60);
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
  return collected = castTo($reduce((lastArg0 = $map(stream((this.suppressedExceptions == null && (this.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_0, 4, 0, 0, 1)) , this.suppressedExceptions)), new Throwable$lambda$0$Type) , of(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)])) , lastArg0), (lastArg = new ArrayList , lastArg)), 42) , collected.toArray(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, collected.size_1(), 5, 1));
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
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 4);
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(37, 4, {3:1, 4:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 37);
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

defineClass(5, 37, $intern_2, RuntimeException_1);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 5);
defineClass(51, 5, $intern_2);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 51);
defineClass(91, 51, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 91);
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

defineClass(38, 91, {38:1, 3:1, 5:1, 4:1}, JavaScriptException);
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
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 38);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(132, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 132);
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
        reportToBrowser(instanceOf(e, 38)?castTo(e, 38).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(101, 132, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 101);
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
defineClass(149, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 149);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(92, 149, {}, StackTraceCreator$CollectorLegacy);
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
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 92);
defineClass(150, 149, {});
_.collect = function collect_0(error){
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 150);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(93, 150, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 93);
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
  $onModuleLoad(new App);
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
    if (instanceOf($e0, 24)) {
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

defineClass(134, 1, {});
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
var Lde_haumacher_msgbuf_data_AbstractDataObject_2_classLit = createForClass('de.haumacher.msgbuf.data', 'AbstractDataObject', 134);
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

defineClass(78, 1, {}, StringR);
_._pos = 0;
var Lde_haumacher_msgbuf_io_StringR_2_classLit = createForClass('de.haumacher.msgbuf.io', 'StringR', 78);
function $write(this$static, str){
  $append_3(this$static._buffer, str);
}

function $write_0(this$static, str, start_0, length_0){
  $append_2(this$static._buffer, str, start_0, start_0 + length_0);
}

function StringW(){
  this._buffer = new StringBuilder;
}

defineClass(57, 1, {}, StringW);
_.toString_0 = function toString_6(){
  return this._buffer.string;
}
;
var Lde_haumacher_msgbuf_io_StringW_2_classLit = createForClass('de.haumacher.msgbuf.io', 'StringW', 57);
function $clinit_JsonReader(){
  var n, charArr;
  $clinit_JsonReader = emptyMethod;
  n = ")]}'\n".length;
  charArr = initUnidimensionalArray(C_classLit, $intern_9, 21, n, 15, 1);
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
          return valueOf(buffer, start_0, len);
        }
         else {
          builder.string += valueOf(buffer, start_0, len);
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
        builder.string += valueOf(buffer, start_0, len);
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
    builder.string += valueOf(buffer, start_0, p - start_0);
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
    result = valueOf(this$static.buffer, this$static.pos, this$static.peekedNumberLength);
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
  result = !builder?valueOf(this$static.buffer, this$static.pos, i):$append_4(builder, this$static.buffer, this$static.pos, i).string;
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
          fitsInLong = fitsInLong & (gt(value_0, $intern_10) || eq(value_0, $intern_10) && compare_0(newValue, value_0) < 0);
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
    newStack = initUnidimensionalArray(I_classLit, $intern_9, 21, this$static.stackSize * 2, 15, 1);
    newPathIndices = initUnidimensionalArray(I_classLit, $intern_9, 21, this$static.stackSize * 2, 15, 1);
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
          throw toJs(new NumberFormatException('\\u' + valueOf(this$static.buffer, this$static.pos, 4)));
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
  this.buffer = initUnidimensionalArray(C_classLit, $intern_9, 21, 1024, 15, 1);
  this.stack_0 = initUnidimensionalArray(I_classLit, $intern_9, 21, 32, 15, 1);
  this.stack_0[this.stackSize++] = 6;
  this.pathNames = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_0, 2, 32, 6, 1);
  this.pathIndices = initUnidimensionalArray(I_classLit, $intern_9, 21, 32, 15, 1);
  this.in_0 = in_0;
}

defineClass(79, 1, {}, JsonReader);
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
var Lde_haumacher_msgbuf_json_JsonReader_2_classLit = createForClass('de.haumacher.msgbuf.json', 'JsonReader', 79);
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

defineClass(12, 1, {3:1, 25:1, 12:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, castTo(other, 12));
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
_.toString_0 = function toString_8(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 12);
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

function values(){
  $clinit_JsonToken();
  return stampJavaTypeInfo(getClassLiteralForArray(Lde_haumacher_msgbuf_json_JsonToken_2_classLit, 1), $intern_1, 15, 0, [BEGIN_ARRAY, END_ARRAY, BEGIN_OBJECT, END_OBJECT, NAME, STRING, NUMBER, BOOLEAN, NULL, END_DOCUMENT]);
}

defineClass(15, 12, {15:1, 3:1, 25:1, 12:1}, JsonToken);
var BEGIN_ARRAY, BEGIN_OBJECT, BOOLEAN, END_ARRAY, END_DOCUMENT, END_OBJECT, NAME, NULL, NUMBER, STRING;
var Lde_haumacher_msgbuf_json_JsonToken_2_classLit = createForEnum('de.haumacher.msgbuf.json', 'JsonToken', 15, values);
function $clinit_JsonWriter(){
  $clinit_JsonWriter = emptyMethod;
  var hex, i, number;
  REPLACEMENT_CHARS = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_0, 2, 128, 6, 1);
  for (i = 0; i <= 31; i++) {
    hex = (number = i >>> 0 , number.toString(16));
    hex = $substring('0000', 0, 4 - hex.length) + ('' + hex);
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
    newStack = initUnidimensionalArray(I_classLit, $intern_9, 21, this$static.stackSize * 2, 15, 1);
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
  this.stack_0 = initUnidimensionalArray(I_classLit, $intern_9, 21, 32, 15, 1);
  $push_0(this, 6);
  this.out = out;
}

function clone(s){
  var result;
  result = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_0, 2, s.length, 6, 1);
  arraycopy(s, 0, result, 0, s.length);
  return result;
}

defineClass(58, 1, {}, JsonWriter);
_.htmlSafe = false;
_.lenient = false;
_.separator = ':';
_.serializeNulls = true;
_.stackSize = 0;
var HTML_SAFE_REPLACEMENT_CHARS, REPLACEMENT_CHARS;
var Lde_haumacher_msgbuf_json_JsonWriter_2_classLit = createForClass('de.haumacher.msgbuf.json', 'JsonWriter', 58);
function IOException(message){
  Exception.call(this, message);
}

defineClass(24, 37, $intern_11, IOException);
var Ljava_io_IOException_2_classLit = createForClass('java.io', 'IOException', 24);
function MalformedJsonException(msg){
  IOException.call(this, msg);
}

defineClass(119, 24, $intern_11, MalformedJsonException);
var Lde_haumacher_msgbuf_json_MalformedJsonException_2_classLit = createForClass('de.haumacher.msgbuf.json', 'MalformedJsonException', 119);
function $clinit_DomGlobal(){
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.goog.global.document;
}

var document_0;
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(49, 1, {81:1});
_.toString_0 = function toString_9(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 49);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(96, 5, $intern_2, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 96);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(39, 5, $intern_2, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 39);
function ArrayIndexOutOfBoundsException(msg){
  IndexOutOfBoundsException_0.call(this, msg);
}

defineClass(67, 39, $intern_2, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 67);
function ArrayStoreException(){
  RuntimeException.call(this);
}

function ArrayStoreException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(66, 5, $intern_2, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 66);
defineClass(27, 4, $intern_12);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 27);
function AssertionError(){
  Throwable.call(this);
}

defineClass(11, 27, $intern_12, AssertionError);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 11);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
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
  return instanceOfString(this$static)?$compareTo_2(this$static, (checkCriticalType(other == null || instanceOfString(other)) , other)):instanceOfDouble(this$static)?$compareTo_1(this$static, (checkCriticalType(other == null || instanceOfDouble(other)) , other)):instanceOfBoolean(this$static)?$compareTo_0(this$static, (checkCriticalType(other == null || instanceOfBoolean(other)) , other)):this$static.compareTo(other);
}

booleanCastMap = {3:1, 88:1, 25:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 88);
function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(89, 5, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 89);
defineClass(135, 1, $intern_9);
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 135);
function $compareTo_1(this$static, b){
  return compare_2((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
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

doubleCastMap = {3:1, 25:1, 82:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 82);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(43, 5, $intern_2, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 43);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(9, 5, $intern_2, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 9);
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

defineClass(684, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(65, 51, $intern_2, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 65);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(90, 43, $intern_2, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 90);
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
  return checkCriticalNotNull(this$static) , this$static === other;
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

function $substring(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

function valueOf(x_0, offset, count){
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

stringCastMap = {3:1, 81:1, 25:1, 2:1};
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
  this$static.string += '' + $substring(x_0 == null?'null':(checkCriticalNotNull(x_0) , x_0), start_0, end);
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_4(this$static, x_0, start_0, len){
  this$static.string += valueOf(x_0, start_0, len);
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

defineClass(30, 49, {81:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 30);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(64, 39, $intern_2, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 64);
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
    len > 0 && copy(src_0, srcOfs, dest, destOfs, len);
}

defineClass(688, 1, {});
function Throwable$lambda$0$Type(){
}

defineClass(84, 1, {}, Throwable$lambda$0$Type);
var Ljava_lang_Throwable$lambda$0$Type_2_classLit = createForClass('java.lang', 'Throwable/lambda$0$Type', 84);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(41, 5, $intern_2, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 41);
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

defineClass(147, 1, {17:1});
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
_.toString_0 = function toString_11(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    $add_2(joiner, e === this?'(this Collection)':e == null?'null':toString_4(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 147);
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

function $toString_0(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_4(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(152, 1, {72:1});
_.equals_0 = function equals_1(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 46)) {
    return false;
  }
  otherMap = castTo(obj, 72);
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
_.toString_0 = function toString_12(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next(entry$iterator);
    $add_2(joiner, $toString_0(this, entry.getKey()) + '=' + $toString_0(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 152);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0){
  return $containsValue_0(value_0, this$static.stringMap) || $containsValue_0(value_0, this$static.hashCodeMap);
}

function $containsValue_0(value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_0(), 20);
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

defineClass(103, 152, {72:1});
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 103);
defineClass(151, 147, $intern_13);
_.equals_0 = function equals_2(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 34)) {
    return false;
  }
  other = castTo(o, 34);
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
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 151);
function $contains(this$static, o){
  if (instanceOf(o, 20)) {
    return $containsEntry(this$static.this$01, castTo(o, 20));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(13, 151, $intern_13, AbstractHashMap$EntrySet);
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
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 13);
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
  rv = castTo(this$static.current.next_0(), 20);
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

defineClass(14, 1, {}, AbstractHashMap$EntrySetIterator);
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
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 14);
function $indexOf(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (equals_7(toFind, this$static.get_0(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(148, 147, {17:1, 42:1});
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
  if (!instanceOf(o, 42)) {
    return false;
  }
  other = castTo(o, 42);
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
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 148);
function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

defineClass(50, 1, {}, AbstractList$IteratorImpl);
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
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 50);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(40, 151, $intern_13, AbstractMap$1);
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
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 40);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(32, 1, {}, AbstractMap$1$1);
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
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 32);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(52, 147, {17:1}, AbstractMap$2);
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
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 52);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(44, 1, {}, AbstractMap$2$1);
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
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 44);
defineClass(97, 1, $intern_14);
_.equals_0 = function equals_4(other){
  var entry;
  if (!instanceOf(other, 20)) {
    return false;
  }
  entry = castTo(other, 20);
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
_.toString_0 = function toString_13(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 97);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(98, 97, $intern_14, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 98);
defineClass(154, 1, $intern_14);
_.equals_0 = function equals_5(other){
  var entry;
  if (!instanceOf(other, 20)) {
    return false;
  }
  entry = castTo(other, 20);
  return equals_7(this.val$entry2.value[0], entry.getKey()) && equals_7($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_6(){
  return hashCode_9(this.val$entry2.value[0]) ^ hashCode_9($getValue(this));
}
;
_.toString_0 = function toString_14(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 154);
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

defineClass(26, 148, $intern_15, ArrayList);
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
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 26);
function $next_0(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(45, 1, {}, ArrayList$1);
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
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 45);
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

defineClass(62, 148, $intern_15, Arrays$ArrayList);
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
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 62);
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

defineClass(104, 1, $intern_9, Comparators$NaturalOrderComparator);
_.compare = function compare_3(a, b){
  return $compare(castTo(a, 25), castTo(b, 25));
}
;
_.equals_0 = function equals_6(other){
  return this === other;
}
;
var Ljava_util_Comparators$NaturalOrderComparator_2_classLit = createForClass('java.util', 'Comparators/NaturalOrderComparator', 104);
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

defineClass(128, 5, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 128);
defineClass(155, 151, $intern_13);
var Ljava_util_EnumSet_2_classLit = createForClass('java.util', 'EnumSet', 155);
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

defineClass(71, 155, $intern_13, EnumSet$EnumSetImpl);
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
var Ljava_util_EnumSet$EnumSetImpl_2_classLit = createForClass('java.util', 'EnumSet/EnumSetImpl', 71);
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

defineClass(130, 1, {}, EnumSet$EnumSetImpl$IteratorImpl);
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
var Ljava_util_EnumSet$EnumSetImpl$IteratorImpl_2_classLit = createForClass('java.util', 'EnumSet/EnumSetImpl/IteratorImpl', 130);
function $equals_1(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  this.hashCodeMap = new InternalHashCodeMap(this);
  this.stringMap = new InternalStringMap(this);
  structureChanged(this);
}

defineClass(46, 103, {3:1, 46:1, 72:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 46);
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

defineClass(129, 151, {3:1, 17:1, 34:1}, HashSet);
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
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 129);
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

defineClass(113, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_7(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 113);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(68, 1, {}, InternalHashCodeMap$1);
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
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 68);
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

defineClass(114, 1, {}, InternalStringMap);
_.iterator = function iterator_8(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 114);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(69, 1, {}, InternalStringMap$1);
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
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 69);
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

defineClass(115, 154, $intern_14, InternalStringMap$2);
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
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 115);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(112, 5, $intern_2, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 112);
function equals_7(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_9(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $clinit_Random(){
  $clinit_Random = emptyMethod;
  var i, i0, twoToTheXMinus24Tmp, twoToTheXMinus48Tmp;
  twoToTheXMinus24 = initUnidimensionalArray(D_classLit, $intern_9, 21, 25, 15, 1);
  twoToTheXMinus48 = initUnidimensionalArray(D_classLit, $intern_9, 21, 33, 15, 1);
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
  hi = this$static.seedhi * $intern_16 + this$static.seedlo * 1502;
  lo = this$static.seedlo * $intern_16 + 11;
  carry = $wnd.Math.floor(lo * $intern_17);
  hi += carry;
  lo -= carry * $intern_18;
  hi %= $intern_18;
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
  hi = round_int($wnd.Math.floor(seed * $intern_17)) & 16777215;
  lo = round_int(seed - hi * $intern_18);
  this.seedhi = hi ^ 1502;
  this.seedlo = lo ^ $intern_16;
}

defineClass(102, 1, {}, Random);
_.seedhi = 0;
_.seedlo = 0;
var twoToTheXMinus24, twoToTheXMinus48, uniqueSeed = 0;
var Ljava_util_Random_2_classLit = createForClass('java.util', 'Random', 102);
function $forEachRemaining(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

function checkCriticalArrayBounds(end, length_0){
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

defineClass(121, 1, {});
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
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 121);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(122, 121, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 122);
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

defineClass(99, 1, {});
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
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 99);
function $consume(this$static, consumer, index_0){
  consumer.accept(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(100, 99, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_1(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.tryAdvance = function tryAdvance(consumer){
  return $tryAdvance(this, consumer);
}
;
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 100);
function $add_2(this$static, newElement){
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

defineClass(63, 1, {}, StringJoiner);
_.toString_0 = function toString_15(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 63);
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

function values_0(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_1, 29, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(29, 12, {3:1, 25:1, 12:1, 29:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 29, values_0);
function CollectorImpl(){
}

defineClass(131, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 131);
function Collectors$20methodref$add$Type(){
}

defineClass(86, 1, {}, Collectors$20methodref$add$Type);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 86);
function Collectors$21methodref$ctor$Type(){
}

defineClass(85, 1, {}, Collectors$21methodref$ctor$Type);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 85);
function Collectors$lambda$42$Type(){
}

defineClass(87, 1, {}, Collectors$lambda$42$Type);
var Ljava_util_stream_Collectors$lambda$42$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$42$Type', 87);
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

defineClass(120, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 120);
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
  castTo(a_1, 17).add_0(t_2);
  return a_1;
}

function lambda$5(consumer_0, item_2){
  $accept(consumer_0, lambda$4(consumer_0.value_0, item_2));
}

defineClass(70, 120, {}, StreamImpl);
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 70);
function StreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.original = original;
}

defineClass(123, 122, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_0(action){
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(action));
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 123);
function StreamImpl$MapToObjSpliterator$lambda$0$Type(action_1){
  this.action_1 = action_1;
}

defineClass(125, 1, {}, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept = function accept(arg0){
  this.action_1.accept(castTo(arg0, 4).backingJsObject);
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 125);
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(124, 1, {}, StreamImpl$ValueConsumer);
_.accept = function accept_0(value_0){
  $accept(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 124);
function StreamImpl$lambda$5$Type(consumer_0){
  this.consumer_0 = consumer_0;
}

defineClass(126, 1, {}, StreamImpl$lambda$5$Type);
_.accept = function accept_1(arg0){
  lambda$5(this.consumer_0, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 126);
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

defineClass(686, 1, {});
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

defineClass(669, 1, {});
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
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
defineClass(671, 1, {});
function $lambda$1(this$static, evt_0){
  var data_0, ex, message;
  try {
    data_0 = evt_0.data;
    message = readServerMessage(new JsonReader(new StringR(data_0)));
    message.visit(this$static, null);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 24)) {
      ex = $e0;
      ($clinit_DomGlobal() , $wnd.goog.global.console).info('Parsing message failed.', ex);
    }
     else 
      throw toJs($e0);
  }
}

function $onModuleLoad(this$static){
  var spielfeld, spielfeldAnzeige, spielfeldDarstellung, stapel, vorrat, vorratsAnzeige;
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
  this$static._socket = new $wnd.WebSocket('ws://localhost:8080/qwirkle/talk');
  this$static._socket.onopen = makeLambdaFunction(App$lambda$0$Type.prototype.onInvoke, App$lambda$0$Type, [this$static]);
  this$static._socket.onmessage = makeLambdaFunction(App$lambda$1$Type.prototype.onInvoke_0, App$lambda$1$Type, [this$static]);
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
    if (instanceOf($e0, 24)) {
      ex = $e0;
      ($clinit_DomGlobal() , $wnd.goog.global.console).info('Sending message failed.', ex);
    }
     else 
      throw toJs($e0);
  }
}

function $visit(self_0){
  ($clinit_DomGlobal() , $wnd.goog.global.console).info('Received: ', self_0);
  return null;
}

function $visit_0(self_0){
  ($clinit_DomGlobal() , $wnd.goog.global.console).info('Received: ', self_0);
  return null;
}

function App(){
}

defineClass(73, 1, {}, App);
var Lqwirkle_app_client_App_2_classLit = createForClass('qwirkle.app.client', 'App', 73);
function App$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(158, $wnd.Function, {}, App$lambda$0$Type);
_.onInvoke = function onInvoke(arg0){
  $send(this.$$outer_0, $setName_0(new Login, 'Hi5'));
}
;
function App$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(159, $wnd.Function, {}, App$lambda$1$Type);
_.onInvoke_0 = function onInvoke_0(arg0){
  $lambda$1(this.$$outer_0, arg0);
}
;
function $add_3(this$static, position){
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
    inBereich = (entry = $next(inBereich$iterator.val$outerIter2) , castTo(entry.getKey(), 7));
    for (nachbar$iterator = new AbstractList$IteratorImpl(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_client_Position_2_classLit, 1), $intern_0, 7, 0, [new Position_0(inBereich._x, inBereich._y - 1), new Position_0(inBereich._x, inBereich._y + 1), new Position_0(inBereich._x - 1, inBereich._y), new Position_0(inBereich._x + 1, inBereich._y)]))); nachbar$iterator.i < nachbar$iterator.this$01.size_1();) {
      nachbar = (checkCriticalElement(nachbar$iterator.i < nachbar$iterator.this$01.size_1()) , castTo(nachbar$iterator.this$01.get_0(nachbar$iterator.last = nachbar$iterator.i++), 7));
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

defineClass(56, 1, {}, Bereich);
_.iterator = function iterator_9(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this._positionen.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_._x1 = 0;
_._x2 = 0;
_._y1 = 0;
_._y2 = 0;
var Lqwirkle_app_client_Bereich_2_classLit = createForClass('qwirkle.app.client', 'Bereich', 56);
function Position_0(x_0, y_0){
  this._x = x_0;
  this._y = y_0;
}

defineClass(7, 1, {7:1}, Position_0);
_.equals_0 = function equals_8(obj){
  var other;
  if (this === obj)
    return true;
  if (obj == null)
    return false;
  if (Lqwirkle_app_client_Position_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj))
    return false;
  other = castTo(obj, 7);
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
_.toString_0 = function toString_16(){
  return '(' + this._x + ', ' + this._y + ')';
}
;
_._x = 0;
_._y = 0;
var Lqwirkle_app_client_Position_2_classLit = createForClass('qwirkle.app.client', 'Position', 7);
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

defineClass(76, 1, {}, SpielfeldDarstellung);
_._xOffset = 0;
_._yOffset = 0;
var Lqwirkle_app_client_SpielfeldDarstellung_2_classLit = createForClass('qwirkle.app.client', 'SpielfeldDarstellung', 76);
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

defineClass(28, 1, {28:1}, SteinDarstellung);
_._x = 0;
var Lqwirkle_app_client_SteinDarstellung_2_classLit = createForClass('qwirkle.app.client', 'SteinDarstellung', 28);
function SteinDarstellung$lambda$0$Type($$outer_0, aktion_1){
  this.$$outer_0 = $$outer_0;
  this.aktion_1 = aktion_1;
}

defineClass(53, 1, {}, SteinDarstellung$lambda$0$Type);
_.handleEvent = function handleEvent(arg0){
  $lambda$0(this.$$outer_0, this.aktion_1, arg0);
}
;
var Lqwirkle_app_client_SteinDarstellung$lambda$0$Type_2_classLit = createForClass('qwirkle.app.client', 'SteinDarstellung/lambda$0$Type', 53);
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

defineClass(116, 1, {}, Verschiebung);
_._offsetX = 0;
_._offsetY = 0;
var Lqwirkle_app_client_Verschiebung_2_classLit = createForClass('qwirkle.app.client', 'Verschiebung', 116);
function Verschiebung$0methodref$beiMausverschiebung$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(117, 1, {}, Verschiebung$0methodref$beiMausverschiebung$Type);
_.handleEvent = function handleEvent_0(arg0){
  $beiMausverschiebung(this.$$outer_0, arg0);
}
;
var Lqwirkle_app_client_Verschiebung$0methodref$beiMausverschiebung$Type_2_classLit = createForClass('qwirkle.app.client', 'Verschiebung/0methodref$beiMausverschiebung$Type', 117);
function Verschiebung$1methodref$beiKnopfLoslassen$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(118, 1, {}, Verschiebung$1methodref$beiKnopfLoslassen$Type);
_.handleEvent = function handleEvent_1(arg0){
  $beiKnopfLoslassen(this.$$outer_0, arg0);
}
;
var Lqwirkle_app_client_Verschiebung$1methodref$beiKnopfLoslassen$Type_2_classLit = createForClass('qwirkle.app.client', 'Verschiebung/1methodref$beiKnopfLoslassen$Type', 118);
function $entferneStein(this$static, stein){
  $remove_2(this$static._steine, stein);
}

function $fülleAuf(this$static){
  var cnt, darstellung, n, x_0;
  $sort(this$static._steine, new Vorrat$lambda$0$Type);
  x_0 = 0;
  for (n = 0 , cnt = this$static._steine.array.length; n < cnt; n++) {
    $positioniere(castTo($get(this$static._steine, n), 28), x_0, 0);
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
    stein = castTo($next_0(stein$iterator), 28);
    stein._bild.addEventListener('mousedown', stein._beiKnopfdruck = new SteinDarstellung$lambda$0$Type(stein, zug));
  }
}

function Vorrat(svg, stapel){
  this._steine = new ArrayList;
  this._svg = svg;
  this._stapel = stapel;
}

function lambda$0(s1_0, s2_1){
  return compare_2(s1_0._x, s2_1._x);
}

defineClass(77, 1, {}, Vorrat);
var Lqwirkle_app_client_Vorrat_2_classLit = createForClass('qwirkle.app.client', 'Vorrat', 77);
function $beiKnopfLosLassen(this$static, left, top_0, steinDarstellung){
  var dx, dy, entry, gesetzterStein, istZeile, linie, nachbar, nachbar$iterator, opX, opY, operation, operation$iterator, operationen, outerIter, outerIter0, outerIter1, outerIter2, position, reihe, spielfeld, stein, teilZug, testPosition, testX, testY, vorratsStein, x_0, y_0, zugBereich, zugErlaubt, zugPosition, zugPosition$iterator, zugPosition$iterator0;
  position = $berechneSpielfeldPosition(this$static._anzeige, round_int(left), round_int(top_0));
  x_0 = position._x;
  y_0 = position._y;
  teilZug = castTo($remove(this$static._teilZüge, steinDarstellung), 31);
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
        operation = (entry = $next(operation$iterator.val$outerIter2) , castTo(entry.getValue(), 31));
        opX = operation._position._x;
        opY = operation._position._y;
        (linie._y1 == linie._y2 && opY == linie._y1 || linie._x1 == linie._x2 && opX == linie._x1) && $add_3(linie, operation._position);
      }
      reihe = new Bereich(x_0, y_0);
      istZeile = linie._y1 == linie._y2;
      baueReihe: for (zugPosition$iterator0 = (outerIter1 = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(linie._positionen.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter1)); zugPosition$iterator0.val$outerIter2.hasNext;) {
        zugPosition = (entry = $next(zugPosition$iterator0.val$outerIter2) , castTo(entry.getKey(), 7));
        if (istZeile) {
          dx = zugPosition._x > x_0?-1:1;
          for (testX = zugPosition._x; testX != x_0; testX += dx) {
            testPosition = new Position_0(testX, y_0);
            if (!$contains_0(linie._positionen, testPosition) && !$get_1(spielfeld, testPosition._x, testPosition._y)) {
              continue baueReihe;
            }
          }
        }
         else {
          dy = zugPosition._y > y_0?-1:1;
          for (testY = zugPosition._y; testY != y_0; testY += dy) {
            testPosition = new Position_0(x_0, testY);
            if (!$contains_0(linie._positionen, testPosition) && !$get_1(spielfeld, testPosition._x, testPosition._y)) {
              continue baueReihe;
            }
          }
        }
        $add_3(reihe, zugPosition);
      }
      for (zugPosition$iterator = (outerIter2 = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(reihe._positionen.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter2)); zugPosition$iterator.val$outerIter2.hasNext;) {
        zugPosition = (entry = $next(zugPosition$iterator.val$outerIter2) , castTo(entry.getKey(), 7));
        for (nachbar$iterator = new AbstractList$IteratorImpl(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_client_Position_2_classLit, 1), $intern_0, 7, 0, [new Position_0(zugPosition._x, zugPosition._y - 1), new Position_0(zugPosition._x, zugPosition._y + 1), new Position_0(zugPosition._x - 1, zugPosition._y), new Position_0(zugPosition._x + 1, zugPosition._y)]))); nachbar$iterator.i < nachbar$iterator.this$01.size_1();) {
          nachbar = (checkCriticalElement(nachbar$iterator.i < nachbar$iterator.this$01.size_1()) , castTo(nachbar$iterator.this$01.get_0(nachbar$iterator.last = nachbar$iterator.i++), 7));
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
          operation = (entry = $next(operationen.val$outerIter2) , castTo(entry.getValue(), 31));
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
    operation = (entry = $next(operation$iterator.val$outerIter2) , castTo(entry.getValue(), 31));
    $add_3(bereich, operation._position);
  }
  return bereich;
}

function Vorrat$Zug(this$0, anzeige){
  this.this$01 = this$0;
  this._teilZüge = new HashMap;
  this._anzeige = anzeige;
}

defineClass(94, 1, {}, Vorrat$Zug);
var Lqwirkle_app_client_Vorrat$Zug_2_classLit = createForClass('qwirkle.app.client', 'Vorrat/Zug', 94);
function Vorrat$Zug$AnlegeOperation(this$1, vorratsStein, x_0, y_0, gesetzterStein){
  this.this$11 = this$1;
  this._vorratsStein = vorratsStein;
  this._position = new Position_0(x_0, y_0);
  this._gesetzterStein = gesetzterStein;
}

defineClass(31, 1, {31:1}, Vorrat$Zug$AnlegeOperation);
var Lqwirkle_app_client_Vorrat$Zug$AnlegeOperation_2_classLit = createForClass('qwirkle.app.client', 'Vorrat/Zug/AnlegeOperation', 31);
function Vorrat$lambda$0$Type(){
}

defineClass(95, 1, {}, Vorrat$lambda$0$Type);
_.compare = function compare_4(arg0, arg1){
  return lambda$0(castTo(arg0, 28), castTo(arg1, 28));
}
;
_.equals_0 = function equals_9(other){
  return this === other;
}
;
var Lqwirkle_app_client_Vorrat$lambda$0$Type_2_classLit = createForClass('qwirkle.app.client', 'Vorrat/lambda$0$Type', 95);
function $nimmStein(this$static){
  return castTo($remove_1(this$static._steine, this$static._steine.array.length - 1), 23);
}

function Nachzugstapel(){
  var farbNummer, farben, formNummer, formen, n;
  this._steine = new ArrayList;
  for (n = 0; n < 3; n++) {
    for (farbNummer = 0 , farben = ($clinit_Qwirkle$Farbe() , stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_shared_Qwirkle$Farbe_2_classLit, 1), $intern_1, 18, 0, [yellow, orange, red, blue, green, magenta])).length; farbNummer < farben; farbNummer++) {
      for (formNummer = 0 , formen = ($clinit_Qwirkle$Form() , stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_shared_Qwirkle$Form_2_classLit, 1), $intern_1, 19, 0, [circle, square, star, pounce, cross, diamond])).length; formNummer < formen; formNummer++) {
        $add(this._steine, new Qwirkle$Stein(stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_shared_Qwirkle$Farbe_2_classLit, 1), $intern_1, 18, 0, [yellow, orange, red, blue, green, magenta])[farbNummer], stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_shared_Qwirkle$Form_2_classLit, 1), $intern_1, 19, 0, [circle, square, star, pounce, cross, diamond])[formNummer]));
      }
    }
  }
  shuffle(this._steine, ($clinit_Collections$RandomHolder() , rnd_0));
}

defineClass(74, 1, {}, Nachzugstapel);
var Lqwirkle_app_shared_Nachzugstapel_2_classLit = createForClass('qwirkle.app.shared', 'Nachzugstapel', 74);
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

function values_1(){
  $clinit_Qwirkle$Farbe();
  return stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_shared_Qwirkle$Farbe_2_classLit, 1), $intern_1, 18, 0, [yellow, orange, red, blue, green, magenta]);
}

defineClass(18, 12, {3:1, 25:1, 12:1, 18:1}, Qwirkle$Farbe);
var blue, green, magenta, orange, red, yellow;
var Lqwirkle_app_shared_Qwirkle$Farbe_2_classLit = createForEnum('qwirkle.app.shared', 'Qwirkle/Farbe', 18, values_1);
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

function values_2(){
  $clinit_Qwirkle$Form();
  return stampJavaTypeInfo(getClassLiteralForArray(Lqwirkle_app_shared_Qwirkle$Form_2_classLit, 1), $intern_1, 19, 0, [circle, square, star, pounce, cross, diamond]);
}

defineClass(19, 12, {3:1, 25:1, 12:1, 19:1}, Qwirkle$Form);
var circle, cross, diamond, pounce, square, star;
var Lqwirkle_app_shared_Qwirkle$Form_2_classLit = createForEnum('qwirkle.app.shared', 'Qwirkle/Form', 19, values_2);
function Qwirkle$Stein(farbe, form_0){
  this.farbe = farbe;
  this.form_0 = form_0;
}

defineClass(23, 1, {23:1}, Qwirkle$Stein);
var Lqwirkle_app_shared_Qwirkle$Stein_2_classLit = createForClass('qwirkle.app.shared', 'Qwirkle/Stein', 23);
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
  farben = (all0 = castTo($getEnumConstants(Lqwirkle_app_shared_Qwirkle$Farbe_2_classLit), 10) , new EnumSet$EnumSetImpl(all0, castTo(createFrom(all0, all0.length), 10)));
  formen = (all = castTo($getEnumConstants(Lqwirkle_app_shared_Qwirkle$Form_2_classLit), 10) , new EnumSet$EnumSetImpl(all, castTo(createFrom(all, all.length), 10)));
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
    dataNew = initUnidimensionalArray(Lqwirkle_app_shared_Qwirkle$Stein_2_classLit, $intern_0, 23, widthNew * heightNew, 0, 1);
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
  this._data = initUnidimensionalArray(Lqwirkle_app_shared_Qwirkle$Stein_2_classLit, $intern_0, 23, 1, 0, 1);
}

defineClass(75, 1, {}, Spielfeld);
_._height = 1;
_._width = 1;
_._xMin = 0;
_._yMin = 0;
var Lqwirkle_app_shared_Spielfeld_2_classLit = createForClass('qwirkle.app.shared', 'Spielfeld', 75);
function $writeTo(this$static, out){
  $writeDeferredName(out);
  $open(out, 1, '[');
  $value(out, 'Login');
  $writeContent(this$static, out);
  $close(out, 1, 2, ']');
}

defineClass(153, 134, {});
_.writeTo = function writeTo(out){
  $writeTo(this, out);
}
;
var Lqwirkle_common_messages_ClientMessage_2_classLit = createForClass('qwirkle.common.messages', 'ClientMessage', 153);
function readServerMessage(in_0){
  var result, type_0, result_0, result_1, result_2, result_3, result_4, result_5, result_6;
  $beginArray(in_0);
  type_0 = $nextString(in_0);
  switch (type_0) {
    case 'OpenGames':
      result = (result_0 = new OpenGames , $beginObject(in_0) , $readFields(result_0, in_0) , $endObject(in_0) , result_0);
      break;
    case 'GameOpened':
      result = (result_1 = new GameOpened , $beginObject(in_0) , $readFields(result_1, in_0) , $endObject(in_0) , result_1);
      break;
    case 'GameClosed':
      result = (result_2 = new GameClosed , $beginObject(in_0) , $readFields(result_2, in_0) , $endObject(in_0) , result_2);
      break;
    case 'UserJoined':
      result = (result_3 = new UserJoined , $beginObject(in_0) , $readFields(result_3, in_0) , $endObject(in_0) , result_3);
      break;
    case 'UserLeft':
      result = (result_4 = new UserLeft , $beginObject(in_0) , $readFields(result_4, in_0) , $endObject(in_0) , result_4);
      break;
    case 'CreateGameResult':
      result = (result_5 = new CreateGameResult , $beginObject(in_0) , $readFields(result_5, in_0) , $endObject(in_0) , result_5);
      break;
    case 'ServerError':
      result = (result_6 = new ServerError , $beginObject(in_0) , $readFields(result_6, in_0) , $endObject(in_0) , result_6);
      break;
    default:$skipValue(in_0);
      result = null;
  }
  $endArray(in_0);
  return result;
}

defineClass(133, 134, {});
_.writeTo = function writeTo_0(out){
  $writeDeferredName(out);
  $open(out, 1, '[');
  $value(out, this.jsonType());
  $writeContent(this, out);
  $close(out, 1, 2, ']');
}
;
var Lqwirkle_common_messages_ServerMessage_2_classLit = createForClass('qwirkle.common.messages', 'ServerMessage', 133);
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

defineClass(59, 133, {});
_.jsonType = function jsonType(){
  return 'Response';
}
;
_.readField = function readField_0(in_0, field){
  $readField(this, in_0, field);
}
;
_.visit = function visit(v, arg){
  return this.visit_0(v, arg);
}
;
_.writeFields = function writeFields_0(out){
  $name_0(out, 'msgId');
  $value(out, this._msgId);
}
;
_._msgId = '';
var Lqwirkle_common_messages_Response_2_classLit = createForClass('qwirkle.common.messages', 'Response', 59);
function $setGame(this$static, value_0){
  this$static._game = value_0;
  return this$static;
}

function CreateGameResult(){
}

defineClass(110, 59, {}, CreateGameResult);
_.jsonType = function jsonType_0(){
  return 'CreateGameResult';
}
;
_.readField = function readField_1(in_0, field){
  switch (field) {
    case 'game':
      $setGame(this, readGameInfo(in_0));
      break;
    default:$readField(this, in_0, field);
  }
}
;
_.visit_0 = function visit_0(v, arg){
  var lastArg;
  return $visit((lastArg = this , lastArg));
}
;
_.writeFields = function writeFields_1(out){
  $name_0(out, 'msgId');
  $value(out, this._msgId);
  if (this._game) {
    $name_0(out, 'game');
    $writeContent(this._game, out);
  }
}
;
_._game = null;
var Lqwirkle_common_messages_CreateGameResult_2_classLit = createForClass('qwirkle.common.messages', 'CreateGameResult', 110);
function $setGameId(this$static, value_0){
  this$static._gameId = value_0;
  return this$static;
}

function GameClosed(){
}

defineClass(107, 133, {}, GameClosed);
_.jsonType = function jsonType_1(){
  return 'GameClosed';
}
;
_.readField = function readField_2(in_0, field){
  switch (field) {
    case 'gameId':
      $setGameId(this, $nextString(in_0));
      break;
    default:$skipValue(in_0);
  }
}
;
_.visit = function visit_1(v, arg){
  return ($clinit_DomGlobal() , $wnd.goog.global.console).info('Received: ', this) , null;
}
;
_.writeFields = function writeFields_2(out){
  $name_0(out, 'gameId');
  $value(out, this._gameId);
}
;
_._gameId = '';
var Lqwirkle_common_messages_GameClosed_2_classLit = createForClass('qwirkle.common.messages', 'GameClosed', 107);
function $addUser(this$static, value_0){
  $add(this$static._users, value_0);
  return this$static;
}

function $setGameId_0(this$static, value_0){
  this$static._gameId = value_0;
  return this$static;
}

function $setName(this$static, value_0){
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

defineClass(54, 134, {54:1}, GameInfo);
_.readField = function readField_3(in_0, field){
  switch (field) {
    case 'gameId':
      $setGameId_0(this, $nextString(in_0));
      break;
    case 'name':
      $setName(this, $nextString(in_0));
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
_.writeFields = function writeFields_3(out){
  var x_0, x$iterator;
  $name_0(out, 'gameId');
  $value(out, this._gameId);
  $name_0(out, 'name');
  $value(out, this._name);
  $name_0(out, 'users');
  $writeDeferredName(out);
  $open(out, 1, '[');
  for (x$iterator = new ArrayList$1(this._users); x$iterator.i < x$iterator.this$01.array.length;) {
    x_0 = castTo($next_0(x$iterator), 55);
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
var Lqwirkle_common_messages_GameInfo_2_classLit = createForClass('qwirkle.common.messages', 'GameInfo', 54);
function $setGame_0(this$static, value_0){
  this$static._game = value_0;
  return this$static;
}

function GameOpened(){
}

defineClass(106, 133, {}, GameOpened);
_.jsonType = function jsonType_2(){
  return 'GameOpened';
}
;
_.readField = function readField_4(in_0, field){
  switch (field) {
    case 'game':
      $setGame_0(this, readGameInfo(in_0));
      break;
    default:$skipValue(in_0);
  }
}
;
_.visit = function visit_2(v, arg){
  return ($clinit_DomGlobal() , $wnd.goog.global.console).info('Received: ', this) , null;
}
;
_.writeFields = function writeFields_4(out){
  if (this._game) {
    $name_0(out, 'game');
    $writeContent(this._game, out);
  }
}
;
_._game = null;
var Lqwirkle_common_messages_GameOpened_2_classLit = createForClass('qwirkle.common.messages', 'GameOpened', 106);
function $setName_0(this$static, value_0){
  this$static._name = value_0;
  return this$static;
}

function Login(){
}

defineClass(80, 153, {}, Login);
_.readField = function readField_5(in_0, field){
  switch (field) {
    case 'name':
      $setName_0(this, $nextString(in_0));
      break;
    default:$skipValue(in_0);
  }
}
;
_.writeFields = function writeFields_5(out){
  $name_0(out, 'name');
  $value(out, this._name);
}
;
_._name = '';
var Lqwirkle_common_messages_Login_2_classLit = createForClass('qwirkle.common.messages', 'Login', 80);
function $addGame(this$static, value_0){
  $add(this$static._games, value_0);
  return this$static;
}

function OpenGames(){
  this._games = new ArrayList;
}

defineClass(105, 133, {}, OpenGames);
_.jsonType = function jsonType_3(){
  return 'OpenGames';
}
;
_.readField = function readField_6(in_0, field){
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
    default:$skipValue(in_0);
  }
}
;
_.visit = function visit_3(v, arg){
  return ($clinit_DomGlobal() , $wnd.goog.global.console).info('Received: ', this) , null;
}
;
_.writeFields = function writeFields_6(out){
  var x_0, x$iterator;
  $name_0(out, 'games');
  $writeDeferredName(out);
  $open(out, 1, '[');
  for (x$iterator = new ArrayList$1(this._games); x$iterator.i < x$iterator.this$01.array.length;) {
    x_0 = castTo($next_0(x$iterator), 54);
    $writeContent(x_0, out);
  }
  $close(out, 1, 2, ']');
}
;
var Lqwirkle_common_messages_OpenGames_2_classLit = createForClass('qwirkle.common.messages', 'OpenGames', 105);
function $setMessage(this$static, value_0){
  this$static._message = value_0;
  return this$static;
}

function ServerError(){
}

defineClass(111, 59, {}, ServerError);
_.jsonType = function jsonType_4(){
  return 'ServerError';
}
;
_.readField = function readField_7(in_0, field){
  switch (field) {
    case 'message':
      $setMessage(this, $nextString(in_0));
      break;
    default:$readField(this, in_0, field);
  }
}
;
_.visit_0 = function visit_4(v, arg){
  var lastArg;
  return $visit_0((lastArg = this , lastArg));
}
;
_.writeFields = function writeFields_7(out){
  $name_0(out, 'msgId');
  $value(out, this._msgId);
  $name_0(out, 'message');
  $value(out, this._message);
}
;
_._message = '';
var Lqwirkle_common_messages_ServerError_2_classLit = createForClass('qwirkle.common.messages', 'ServerError', 111);
function $setName_1(this$static, value_0){
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

defineClass(55, 134, {55:1}, UserInfo);
_.readField = function readField_8(in_0, field){
  switch (field) {
    case 'userId':
      $setUserId(this, $nextString(in_0));
      break;
    case 'name':
      $setName_1(this, $nextString(in_0));
      break;
    default:$skipValue(in_0);
  }
}
;
_.writeFields = function writeFields_8(out){
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
var Lqwirkle_common_messages_UserInfo_2_classLit = createForClass('qwirkle.common.messages', 'UserInfo', 55);
function $setGameId_1(this$static, value_0){
  this$static._gameId = value_0;
  return this$static;
}

function $setUser(this$static, value_0){
  this$static._user = value_0;
  return this$static;
}

function UserJoined(){
}

defineClass(108, 133, {}, UserJoined);
_.jsonType = function jsonType_5(){
  return 'UserJoined';
}
;
_.readField = function readField_9(in_0, field){
  switch (field) {
    case 'gameId':
      $setGameId_1(this, $nextString(in_0));
      break;
    case 'user':
      $setUser(this, readUserInfo(in_0));
      break;
    default:$skipValue(in_0);
  }
}
;
_.visit = function visit_5(v, arg){
  return ($clinit_DomGlobal() , $wnd.goog.global.console).info('Received: ', this) , null;
}
;
_.writeFields = function writeFields_9(out){
  $name_0(out, 'gameId');
  $value(out, this._gameId);
  if (this._user) {
    $name_0(out, 'user');
    $writeContent(this._user, out);
  }
}
;
_._gameId = '';
_._user = null;
var Lqwirkle_common_messages_UserJoined_2_classLit = createForClass('qwirkle.common.messages', 'UserJoined', 108);
function $setGameId_2(this$static, value_0){
  this$static._gameId = value_0;
  return this$static;
}

function $setUserId_0(this$static, value_0){
  this$static._userId = value_0;
  return this$static;
}

function UserLeft(){
}

defineClass(109, 133, {}, UserLeft);
_.jsonType = function jsonType_6(){
  return 'UserLeft';
}
;
_.readField = function readField_10(in_0, field){
  switch (field) {
    case 'gameId':
      $setGameId_2(this, $nextString(in_0));
      break;
    case 'userId':
      $setUserId_0(this, $nextString(in_0));
      break;
    default:$skipValue(in_0);
  }
}
;
_.visit = function visit_6(v, arg){
  return ($clinit_DomGlobal() , $wnd.goog.global.console).info('Received: ', this) , null;
}
;
_.writeFields = function writeFields_10(out){
  $name_0(out, 'gameId');
  $value(out, this._gameId);
  $name_0(out, 'userId');
  $value(out, this._userId);
}
;
_._gameId = '';
_._userId = '';
var Lqwirkle_common_messages_UserLeft_2_classLit = createForClass('qwirkle.common.messages', 'UserLeft', 109);
var C_classLit = createForPrimitive('char', 'C');
var D_classLit = createForPrimitive('double', 'D');
var I_classLit = createForPrimitive('int', 'I');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=qwirkle-0.js

