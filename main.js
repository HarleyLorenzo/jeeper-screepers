"use strict";

var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
const config = require('config');

function countCreeps(type) {
  let count = 0;
  for(let name in Game.creeps) {
    if(Game.creeps[name].memory.role == type) {
      count++;
    }
  }
  return count;
}

module.exports.loop = function () {

  let spawn = Game.spawns["Spawn1"];
  if (!spawn.spawning) {
    for (let i = countCreeps(1); i < config.roleCount.harvester; i++) {
      spawn.spawnCreep([WORK, CARRY, MOVE], 'harvester' + Game.time.toString(), 
      { memory: {role: 1} });
    }
  }
  if(!spawn.spawning) {
    for(let i = countCreeps(2); i < config.roleCount.upgrader; i++) {
      spawn.spawnCreep([WORK, CARRY, MOVE], 'upgrader' + Game.time.toString(), 
      { memory: {role: 2} });
    }
  }
  if(!spawn.spawning) {
    for(let i = countCreeps(3); i < config.roleCount.builder; i++) {
      spawn.spawnCreep([WORK, CARRY, MOVE], 'builder' + Game.time.toString(), 
      { memory: {role: 3} });
    }
  }

  /** 
   * For slight efficiency gain, we use integer comparisions
   *  harvester = 1
   *  upgrader = 2
   *  builder = 3
   */
  for(var name in Game.creeps) {
    var creep = Game.creeps[name];
    if(creep.memory.role == 1) {
      roleHarvester.run(creep);
    }
    if(creep.memory.role == 2) {
      roleUpgrader.run(creep);
    }
    if(creep.memory.role == 3) {
      roleBuilder.run(creep);
    }
  }
}