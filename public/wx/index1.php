<?php
//获得参数 signature nonce token timestamp echostr
   /* $nonce     = $_GET['nonce'];
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
	else{*/
      $postArr = $GLOBALS['HTTP_RAW_POST_DATA'];
      $postObj = simplexml_load_string( $postArr );
      if( strtolower( $postObj->MsgType) == 'event'){
        if( strtolower($postObj->Event == 'subscribe') ){
          $toUser   = $postObj->FromUserName;
          $fromUser = $postObj->ToUserName;
          $time     = time();
          $msgType  =  'text';
          $content  = '欢迎关注我们的微信公众账号';
          //.$postObj->FromUserName.'-'.$postObj->ToUserName;
          $template = "<xml><ToUserName><![CDATA[%s]]></ToUserName>
          <FromUserName><![CDATA[%s]]></FromUserName>
          <CreateTime>%s</CreateTime>
          <MsgType><![CDATA[%s]]></MsgType>
          <Content><![CDATA[%s]]></Content>
          </xml>";
          $info     = sprintf($template, $toUser, $fromUser, $time, $msgType, $content);
          echo $info;
        }
        
      }
      else if( strtolower( $postObj->MsgType) == 'text'){
          $content  = $postObj->Content;
        $toUser   = $postObj->FromUserName;
          $fromUser = $postObj->ToUserName;
          $time     = time();
          $msgType  =  'text';
          $content  = '您发送的内容是：'.$content;
          //.$postObj->FromUserName.'-'.$postObj->ToUserName;
          $template = "<xml><ToUserName><![CDATA[%s]]></ToUserName>
          <FromUserName><![CDATA[%s]]></FromUserName>
          <CreateTime>%s</CreateTime>
          <MsgType><![CDATA[%s]]></MsgType>
          <Content><![CDATA[%s]]></Content>
          </xml>";
          $info     = sprintf($template, $toUser, $fromUser, $time, $msgType, $content);
          echo $info;
        }
    //}