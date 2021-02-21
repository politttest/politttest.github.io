package com.company;

import javax.swing.*;
import java.awt.*;

public class MyComponents extends JComponent {
    @Override
    protected void paintComponent(Graphics g){
        Graphics2D g2 = (Graphics2D)g;
        g2.drawString("Hello World", 20, 20);
    }
}
