package com.facebook.react.uiapp;

import android.app.Activity;
import android.view.View;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.JavaJSExecutor;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.devsupport.ReactInstanceManagerDevHelper;
import com.facebook.react.util.RNLog;
import com.facebook.react.devsupport.DevSupportManagerImpl;

public class NativeLogModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private static  DevSupportManagerImpl mDevSupportManager;

    public static final String NAME = "NativeLogModule";

    private ReactInstanceManagerDevHelper reactInstanceManagerHelper; 

    NativeLogModule(ReactApplicationContext context){ 
        super(context); 
        reactContext = context;
        mDevSupportManager = new DevSupportManagerImpl(reactContext,reactInstanceManagerHelper,null, true,2);
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
    public void showSyntaxError(String message){
      ReadableArray details = Arguments.createArray();
      mDevSupportManager.showNewJSError(message,details, 404);
    }

    @ReactMethod
    public void crashScreen(){
      int num[] = {0,1,2,3,4};
      System.out.println(num[6]);
    }

}
