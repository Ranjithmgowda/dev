public class StringArrayTest {
   public static List<String> generateStringArray(Integer n)
    {
        List<String> value = new List<String>();
        for(Integer i=0;i<n;i++)
        {
           value.add('Test '+i);
           System.debug(value[i]);
        }
        return value;
    }
}