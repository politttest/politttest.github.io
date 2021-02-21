package com.company;

import javax.swing.*;

public class Main extends JFrame {
    public Main(){
        setTitle("Змейка");
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setSize(320,445);
        setLocation(400, 400);
        add(new MyComponents());
        add(new GameField());
        setVisible(true);
    }

    public static void main(String[] args) {
        Main mw = new Main();
    }
}
