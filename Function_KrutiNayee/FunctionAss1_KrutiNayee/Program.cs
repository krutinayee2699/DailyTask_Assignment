using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FunctionAss1_KrutiNayee
{
    class Ass1
    {
        void RecursiveFunction(int n)
        {
            if (n > 0)
            {
                Console.WriteLine(n);
                RecursiveFunction(n - 1);
            }
        }
        static void Main(string[] args)
        {
            Ass1 a = new Ass1();
            a.RecursiveFunction(5);
            Console.ReadKey();
        }
    }

}
