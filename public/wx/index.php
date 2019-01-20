<?php
$wechatObj = new wechatCallbackapiTest();
$wechatObj->responseMsg();
class wechatCallbackapiTest
{
    public function responseMsg()
    {
    //获得参数 signature nonce token timestamp echostr
    $nonce     = $_GET['nonce'];
    $token     = 'cat';
    $timestamp = $_GET['timestamp'];
    $echostr   = $_GET['echostr'];
    $signature = $_GET['signature'];
    //形成数组，然后按字典序排序
    $array = array();
    $array = array($nonce, $timestamp, $token);
    sort($array);
    //拼接成字符串,sha1加密 ，然后与signature进行校验
    $str = sha1( implode( $array ) );
    if( $str == $signature && $echostr ){
        //第一次接入weixin api接口的时候
        echo  $echostr;
        exit;
    }
    else{
        //1.获取到微信推送过来post数据（xml格式）
        $postArr = $GLOBALS['HTTP_RAW_POST_DATA'];
        //2.处理消息类型，并设置回复类型和内容
        $postObj = simplexml_load_string( $postArr );
        //判断该数据包是否是订阅的事件推送
        if( strtolower( $postObj->MsgType) == 'event'){
            //如果是关注 subscribe 事件
            if( strtolower($postObj->Event == 'subscribe') ){
                //回复用户消息(纯文本格式)
                $toUser   = $postObj->FromUserName;
                $fromUser = $postObj->ToUserName;
                $time     = time();
                $msgType  =  'text';
                $content  = '欢迎关注我们的微信公众账号,此公众号为测试公众号！';
                $template = "<xml>
                                <ToUserName><![CDATA[%s]]></ToUserName>
                                <FromUserName><![CDATA[%s]]></FromUserName>
                                <CreateTime>%s</CreateTime>
                                <MsgType><![CDATA[%s]]></MsgType>
                                <Content><![CDATA[%s]]></Content>
                                </xml>";
                $info     = sprintf($template, $toUser, $fromUser, $time, $msgType, $content);
                echo $info;
            }
        }
        //判断该数据包是否是文本消息
        if( strtolower( $postObj->MsgType) == 'text'){
            //接受文本信息
            $content = $postObj->Content;
            //回复用户消息(纯文本格式)
            $toUser   = $postObj->FromUserName;
            $fromUser = $postObj->ToUserName;
            $time     = time();
            $msgType  =  'text';
            $str = mb_substr($content,-2,2,"UTF-8");
            $str_key = mb_substr($content,0,-2,"UTF-8");
            if($str == '天气' && !empty($str_key)){
                $data = $this->weather($str_key);
                if(empty($data->result)){
                    $content = "抱歉，没有查到\"".$str_key."\"的天气信息！";
                }
                else{
                    $content = "【".$data->result->realtime->city_name."天气预报】\n".$data->result->realtime->date." ".$data->result->realtime->time."发布"."\n\n实时天气\n".$data->result->realtime->weather->info." ".$data->result->realtime->weather->temperature."度\npm2.5指数：".$data->result->pm25->pm25->pm25."\n\n温馨提示：".$data->result->pm25->pm25->des;
                }
                $template = "<xml>
                                <ToUserName><![CDATA[%s]]></ToUserName>
                                <FromUserName><![CDATA[%s]]></FromUserName>
                                <CreateTime>%s</CreateTime>
                                <MsgType><![CDATA[%s]]></MsgType>
                                <Content><![CDATA[%s]]></Content>
                                </xml>";
                $info= sprintf($template, $toUser, $fromUser, $time, $msgType, $content);
                echo $info;
            }
            else{
                $content  = '您发送的内容是：'.$content;
                $template = "<xml>
                <ToUserName><![CDATA[%s]]></ToUserName>
                <FromUserName><![CDATA[%s]]></FromUserName>
                <CreateTime>%s</CreateTime>
                <MsgType><![CDATA[%s]]></MsgType>
                <Content><![CDATA[%s]]></Content>
                </xml>";
                $info= sprintf($template, $toUser, $fromUser, $time, $msgType, $content);
                echo $info;
            }
        }
    }
}
private function weather($n){
    include("weather_cityId.php");
    $c_name=$weather_cityId[$n];
    if(!empty($c_name)){
        $json=file_get_contents("http://api.avatardata.cn/Weather/Query?key=d19c74b1049e4385af80e1c4eda56ddf&cityname=".$n);
        return json_decode($json);
    } else {
        return null;
    }
}
}
