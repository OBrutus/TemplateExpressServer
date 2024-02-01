echo "Please set the below enviornment variables as per your Host OS"

##########################################################################
################### Enviornment variables goes here ######################
##########################################################################

export MONGO_DB_URI="<Your DB connection string>"

##########################################################################

echo "To allow this script to run, execute"
# this is useless if you are running bash enviornment-variables
# you need to use the current session, so have to have exec. permissions
echo "chmod +x enviornment-variables"

echo "Run the current scipt to set the env variables, by executing: "
echo ". ./enviornment-variable.sh"
