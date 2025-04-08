package edu.kh.todoList.controller;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/todo/delete")
public class DeleteServlet extends HttpServlet{
	
	private TodoListService service = new TodoListServiceImpl();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		try {
			int todoNo = Integer.parseInt(req.getParameter("todoNo"));
			int result = service.todoDelete(todoNo);

			HttpSession session = req.getSession();

			if(result > 0) {
				session.setAttribute("message", "삭제 성공!");
				resp.sendRedirect("/");
			} else {
				session.setAttribute("message", "삭제 실패...");
				resp.sendRedirect("/todo/detail?todoNo=" + todoNo);
			}
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
}
