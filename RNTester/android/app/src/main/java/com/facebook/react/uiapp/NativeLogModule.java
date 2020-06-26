package com.facebook.react.uiapp;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.util.RNLog;

public class NativeLogModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    public static final String NAME = "NativeLogModule";

    NativeLogModule(ReactApplicationContext context){ 
        super(context); 
        reactContext = context; 
    }

    @Override
    public String getName() {
        return NAME;
    }

    @ReactMethod 
    public void showError(){ 
        RNLog.e(reactContext, "Unable to launch logbox because react was unable to create the root view");
    }

    @ReactMethod 
    public void showWarning(){ 
        RNLog.w(reactContext, "Unable to launch logbox because react was unable to create the root view");
    }

    @ReactMethod 
    public void showSyntaxError(){
      String message = "Exception in native call\n" +
        "    com.facebook.react.common.DebugServerException: Error while reading multipart response.\n" +
        "    \n" +
        "    Response code: 200\n" +
        "    \n" +
        "    URL: http://10.0.2.2:8081/RNTester/js/RNTesterApp.android.bundle?platform=android&dev=true&minify=false&app=com.facebook.react.uiapp&modulesOnly=false&runModule=true\n" +
        "    \n" +
        "    \n" +
        "        at com.facebook.react.devsupport.BundleDownloader.processMultipartResponse(BundleDownloader.java:234)\n" +
        "        at com.facebook.react.devsupport.BundleDownloader.access$100(BundleDownloader.java:34)\n" +
        "        at com.facebook.react.devsupport.BundleDownloader$1.onResponse(BundleDownloader.java:147)\n" +
        "        at okhttp3.RealCall$AsyncCall.execute(RealCall.java:174)\n" +
        "        at okhttp3.internal.NamedRunnable.run(NamedRunnable.java:32)\n" +
        "        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)\n" +
        "        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)\n" +
        "        at java.lang.Thread.run(Thread.java:764)";


    }

    @ReactMethod
    public void crashScreen(){
      int num[] = {0,1,2,3,4};
      System.out.println(num[6]);
    }

}
