package com.example.overseasmgr.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author Jerry昊昊
 * @email litenghao923@qq.com
 * @date 2022-03-01 10:24
 * @company 河南摩码网络科技有限公司
 */
@Configuration
public class ResourceConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new ResourceInterceptor()).excludePathPatterns("/static/**");
    }


    @Override
    //需要告知系统，这是要被当成静态文件
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        //配置文件上传的文件不拦截
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");

    }
}
