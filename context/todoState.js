import { useReducer } from "react";
import { API } from "../lib/kontenbase";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";
import { useNavigation } from "@react-navigation/native";

const TodoState = ({ children }) => {
  const navigation = useNavigation();

  const initialState = {
    todo: {},
    user: {},
    category: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  async function login(user) {
    const { data: payload, error } = await API.post("/auth/login", {
      email: user.email,
      password: user.password,
    });

    if (error) {
      alert("Wrong email or password");
      return;
    }

    dispatch({
      type: "LOGIN_SUCCESS",
      payload,
    });

    navigation.navigate("Home");
  }

  async function register(user) {
    const { data: payload, error } = await API.post("/auth/register", {
      firstName: user.name,
      email: user.email,
      password: user.password,
    });

    if (error) {
      alert("Email already exists");
      return;
    }

    dispatch({
      type: "REGISTER_SUCCESS",
      payload,
    });

    navigation.navigate("Home");
  }

  async function createList(todoList) {
    const { data, error } = await API.post("/todos", {
      name: todoList.name,
      category: Number(todoList.category),
      date: todoList.date,
      description: todoList.description,
      isDone: false,
    });

    if (error) {
      alert("Failed add list");
      return;
    }

    dispatch({
      type: "CREATE_TODO",
      payload: data,
    });
    console.log("berhasil add");
  }

  async function createCategory(name) {
    const { data: payload, error } = await API.post("/categories", {
      name,
    });

    if (error) {
      alert("Add category failed");
      return;
    }

    dispatch({
      type: "CREATE_CATEGORY",
      payload,
    });
  }

  async function getTodo(id) {
    const { data: payload, error } = await API.get(`/todos/${id}`);

    if (error) {
      alert("The List not have detail");
      return;
    }

    dispatch({
      type: "GET_TODO",
      payload,
    });
  }

  async function doList(done) {
    const { data: payload, error } = await API.patch(`/todos/${done.id}`);

    if (error) {
      alert("failed checked");
      return;
    }

    dispatch({
      type: "DO_LIST",
      payload: done.isDone,
    });
  }

  async function findCategory() {
    const { data: payload, error } = await API.get("/categories");

    if (error) {
      alert("get category failed");
      return;
    }

    dispatch({
      type: "FIND_CATEGORY",
      payload,
    });
  }

  const { todo, user, category, loading } = state;

  return (
    <TodoContext.Provider
      value={{
        todo,
        user,
        category,
        loading,
        login,
        register,
        createList,
        createCategory,
        getTodo,
        doList,
        findCategory,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
