a_function(){
    echo "$1"
    if [ "$1" = "1" ];
    then
        echo "VPN"
    fi
}

a_function "0"

a_function "1"

if [ "a" = "a" ];
then
    echo "Port"
else
    echo "Android"
fi
