using System;

namespace Program1
{
    class Program
    {
        public void Show()
        {
            Console.WriteLine("this function is not parameterised");
        }
        public void Show1(string name)
        {
            Console.WriteLine("Name : " + name);
        }
        public string Show2(string msg)
        {
            Console.WriteLine("Msg inside the Show2() function =>");
            return msg;
        }
        public void Show3(int val)
        {
            val *= val;
            Console.WriteLine("Value inside the function " + val);
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Program is Running....");
            int num1 = 10;
            int num2 = 11;
            if (num1 % 2 == 0)
            {
                Console.WriteLine("It is even number");
            }

            if (num2 % 2 == 0)
            {
                Console.WriteLine("It is even number");
            }
            else
            {
                Console.WriteLine("It is odd number");
            }

            Console.Write("Enter a number:");
            int num = Convert.ToInt32(Console.ReadLine());

            switch (num)
            {
                case 10: Console.WriteLine("It is 10"); break;
                case 20: Console.WriteLine("It is 20"); break;
                case 30: Console.WriteLine("It is 30"); break;
                default: Console.WriteLine("Not 10, 20 or 30"); break;

            }
            Program obj1 = new Program();
            obj1.Show();
            obj1.Show1("Raju");
            string message = obj1.Show2("What's up ?");
            Console.WriteLine("Watch Me : " + message);
            int val = 50;
            Console.WriteLine("Before Calling the function : " + val);
            obj1.Show3(val);
        }
    }
}
