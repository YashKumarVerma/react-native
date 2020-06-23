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
        RNLog.e("Unable to launch logbox because react was unable to create the root view");
    }

    @ReactMethod 
    public void showWarning(){ 
        RNLog.w("Unable to launch logbox because react was unable to create the root view");
    }

}