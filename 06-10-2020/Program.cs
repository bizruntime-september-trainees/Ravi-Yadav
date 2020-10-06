using System;

namespace _06_10_2020
{
    class Program
    {
        public void Show(out int val)
        {
            int square = 5;
            val = square;
            val *= val;
        }
        static void Main(string[] args)
        {
            int val = 50;
            Console.WriteLine(val);
            Program p1 = new Program();
            p1.Show(out val);
            Console.WriteLine(val);
            int[] a = new int[5];
            a[0] = 10;
            a[1] = 15;
            a[2] = 20;
            a[3] = 25;
            for (int i = 0; i < 5; i++)
            {
                Console.Write(a[i] + ",");
            }
        }
    }
}
