/** 
 * @name Welcomer
 * @author faulty
 * @description Welcomes you to discord when you boot it. Support: https://discord.gg/bcvjrmwn6N
 * @version 1 (Testing)
 */


module.exports = class MyPlugin {
  constructor(meta) {
    
  }
  start() {
 BdApi.alert("Hello", "Welcome to Discord.")
  }
  stop() {
    
  }
};
