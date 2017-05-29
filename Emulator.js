

package report;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.concurrent.TimeUnit;  

import javax.swing.JOptionPane;

import org.openqa.selenium.By;  
import org.openqa.selenium.WebDriver;  
import org.openqa.selenium.WebElement;  
import org.openqa.selenium.firefox.FirefoxDriver;  
import org.openqa.selenium.firefox.FirefoxProfile;  
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.BeforeTest;  
import org.testng.annotations.Test;  


public class emulator {
WebDriver driver;

public void setUp() throws MalformedURLException 
{
DesiredCapabilities capabilities= new DesiredCapabilities();
capabilities.setCapability(CapabilityType.BROWSER_NAME,"Google Chrome");
capabilities.setCapability(CapabilityType.VERSION,"4.4.4");
capabilities.setCapability(CapabilityType.PLATFORM,"windows");
capabilities.setCapability("platformName","Android");
capabilities.setCapability("devices","Android");
capabilities.setCapability("avd","samsung");
capabilities.setCapability("deviceName","");
capabilities.setCapability("appPackage", "com.android.googlechrome");
capabilities.setCapability("appActivity",    "com.android.googlechrome.BrowserActivity");
driver=new RemoteWebDriver(new URL("http://google.com"), capabilities);
}



public void cal(){
driver.get("http://www.google.com");

}
public static void main(String[] args) throws MalformedURLException
{
emulator a=new emulator();
a.setUp();
a.cal();           
}
}
