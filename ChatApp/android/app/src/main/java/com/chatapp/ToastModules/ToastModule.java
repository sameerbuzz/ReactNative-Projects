package com.chatapp;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ToastModule extends ReactContextBaseJavaModule {
//    constructor
    public ToastModule(ReactApplicationContext context){
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastModule";
    }

    @ReactMethod
    public  void showText(String message, int duration){
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}
