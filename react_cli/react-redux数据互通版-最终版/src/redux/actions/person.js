import { ADD_PERSON } from "../constant";

// 创建增减一个人的动作对象
export const creatAddPerson = (personObj) => ({type:ADD_PERSON,data:personObj})