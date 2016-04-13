#!/bin/bash

echo "Service [$APP_NAME] - [$1]"

export APP_HOME=/opt/platform-community-4.3.0
export APP_NAME=exo

echo "    JAVA_HOME=$JAVA_HOME"
echo "    APP_HOME=$APP_HOME"
echo "    APP_NAME=$APP_NAME"

function start {
    
    echo "Starting exo application..."
    nohup sudo -u exo $APP_HOME/start_eXo.sh --background  < /dev/null > /dev/null 2>&1 &
}

function stop {
    if ! pkill -0 -f EXO_TOMCAT > /dev/null 2>&1
    then
        echo "Service [$APP_NAME] is not running. Ignoring shutdown request."
        exit 1
    fi

    nohup sudo -u exo $APP_HOME/stop_eXo.sh < /dev/null > /dev/null 2>&1 &
}

case $1 in
start)
    start
;;
stop)
    stop
;;
restart)
    stop
    start
;;
esac
exit 0
