package com.web.todo.util;

import java.util.ArrayList;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.web.todo.repository.ToDoRepository;

@Component
public class EmailScheduler {
	@Autowired
	ToDoRepository toDoRepository;
//	public void beep(ArrayList<String> emails) {
//
//		ScheduledExecutorService scheduledExecutorService = Executors.newScheduledThreadPool(1);
//		 
//        Runnable task = () -> {
//          System.out.println("Executing Task At " + System.nanoTime());
//       	System.out.println("executing");
//	   //  ArrayList<String> emails=toDoRepository.findtaskswithexpireddate();
//	      String content="heloo";
//	      String subject="man";
//	      System.out.println(emails);
//	      for(String email:emails) {
//	    	  try {
//				Email.sendMail(email, content, subject);
//				
//			} catch (MessagingException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//	      }
//        };
//        
//        System.out.println("scheduling task to be executed every 2 seconds with an initial delay of 0 seconds");
//        scheduledExecutorService.scheduleAtFixedRate(task,10, 10, TimeUnit.SECONDS);
// }
	  @Scheduled(cron = "0/05 * * * * ?")
	    public void publish() {
	System.out.println("executing");
	System.out.println("executing");
	     ArrayList<String> emails=toDoRepository.findtaskswithexpireddate();
	      String content="Your task is still pending past the due date";
	      String subject="To do item pending";
	      System.out.println(emails);
	      if(emails.size()>0) {
	      for(String email:emails) {
	    	  try {
				Email.sendMail(email, content, subject);
				
			} catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	      }
	      }
	    }
}
