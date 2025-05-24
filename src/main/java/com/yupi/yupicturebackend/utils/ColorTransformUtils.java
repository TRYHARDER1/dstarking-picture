package com.yupi.yupicturebackend.utils;

import com.yupi.yupicturebackend.exception.BusinessException;
import com.yupi.yupicturebackend.exception.ErrorCode;

public class ColorTransformUtils {
    private ColorTransformUtils() {
        // 工具类不需要实例化
    }
    /**
     * 将十六进制颜色代码转换为 RGB 数组
     *
     * @param color 十六进制颜色代码（如 0xFF0000）
     * @return RGB 数组
     */
    public static String normalizeHexColor(String color){
        if (color == null || color.trim().isEmpty()){
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"颜色不能为空");
        }
        String cleanHex = color.trim().toLowerCase();
        if (cleanHex.startsWith("0x")) {
            cleanHex = cleanHex.substring(2);
        }else if (cleanHex.startsWith("#")) {
            cleanHex = cleanHex.substring(1);
        }

        //检查是否为合法的十六进制字符
        if (!cleanHex.matches("[0-9a-fA-F]+$")) {
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"颜色格式错误");
        }

        //检查长度并不起前导0
        int length = cleanHex.length();
        if (length > 6){
            throw new BusinessException(ErrorCode.PARAMS_ERROR,"颜色格式错误");
        }else if (length == 6){
            return "0x" + cleanHex;
        }else {
            StringBuilder paddedHex = new StringBuilder(cleanHex);
            while (paddedHex.length() < 6) {
                paddedHex.insert(0, '0');
            }
            return "0x" + paddedHex.toString();
        }
    }
}
